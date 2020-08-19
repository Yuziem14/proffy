const Database = require('./database/db');
const createProffy = require('./database/createProffy');
const createClass = require('./database/createClass');
const createSchedule = require('./database/createSchedule');
const {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
} = require('./utils/format');

function sendPageLanding(req, res) {
  return res.render('index.njk');
}

async function sendPageStudy(req, res) {
  const filters = req.query;
  const isFiltersInvalid =
    !filters.subject || !filters.weekday || !filters.time;

  const timeToMinutes = convertHoursToMinutes(filters.time || '0:00');

  const query = `
      SELECT classes.*, proffys.*
      FROM proffys
      JOIN classes ON (classes.proffy_id = proffys.id)
      WHERE EXISTS(
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = classes.id
        AND class_schedule.weekday = ${filters.weekday}
        AND class_schedule.time_from <= ${timeToMinutes}
        AND class_schedule.time_to > ${timeToMinutes}
      )
      AND classes.subject = ${filters.subject}
    `;

  const totalProffysQuery = `
    SELECT count(*) as total FROM proffys
  `;

  try {
    const db = await Database;
    const { total } = await db.get(totalProffysQuery);

    if (isFiltersInvalid) {
      return res.render(`study.njk`, {
        filters,
        subjects,
        weekdays,
        totalProffys: total,
      });
    }

    const proffys = await db.all(query);

    const serializedProffys = proffys.map(proffy => {
      return {
        ...proffy,
        subject: getSubject(proffy.subject),
      };
    });

    return res.render('study.njk', {
      proffys: serializedProffys,
      filters,
      subjects,
      weekdays,
      totalProffys: total,
    });
  } catch (err) {
    console.log(err);
  }
}

function sendPageGiveClasses(req, res) {
  return res.render('give-classes.njk', { subjects, weekdays });
}

async function saveClasses(req, res) {
  const data = req.body;

  const proffy = {
    name: data.name,
    avatar: data.avatar,
    phone_number: data.phone_number,
    bio: data.bio,
  };

  const classObject = {
    subject: data.subject,
    cost: data.cost,
  };

  const schedules = data.weekday.map((weekday, index) => {
    return {
      weekday,
      time_from: convertHoursToMinutes(data.time_from[index]),
      time_to: convertHoursToMinutes(data.time_to[index]),
    };
  });

  try {
    const db = await Database;

    const { id: proffy_id } = await createProffy(db, proffy);

    const { id: class_id } = await createClass(db, {
      ...classObject,
      proffy_id,
    });

    const insertAllSchedules = schedules.map(async schedule => {
      await createSchedule(db, {
        ...schedule,
        class_id,
      });
    });

    await Promise.all(insertAllSchedules);

    let queryString = `?subject=${data.subject}&weekday=${data.weekday[0]}&time=${data.time_from[0]}`;

    return res.redirect(`/study${queryString}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  sendPageLanding,
  sendPageStudy,
  sendPageGiveClasses,
  saveClasses,
};
