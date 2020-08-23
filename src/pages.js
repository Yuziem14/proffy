const Proffy = require('./repositories/proffy');
const Classes = require('./repositories/classes');
const Schedule = require('./repositories/schedule');

const { subjects, weekdays } = require('./utils/format');

function sendPageLanding(req, res) {
  return res.render('index.njk');
}

async function sendPageStudy(req, res) {
  const filters = req.query;
  const isFiltersInvalid =
    !filters.subject || !filters.weekday || !filters.time;

  try {
    const total = await Proffy.count();

    if (isFiltersInvalid) {
      return res.render(`study.njk`, {
        filters,
        subjects,
        weekdays,
        totalProffys: total,
      });
    }

    const proffys = await Proffy.filter(filters, true);

    const proffysWithSchedules = await Promise.all(
      proffys.map(async proffy => {
        const schedules = await Schedule.allFromProffy(proffy.id, true);
        return {
          ...proffy,
          schedules,
        };
      })
    );

    return res.render('study.njk', {
      proffys: proffysWithSchedules,
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
      time_from: data.time_from[index],
      time_to: data.time_to[index],
    };
  });

  try {
    const { id: proffy_id } = await Proffy.create(proffy);

    const { id: class_id } = await Classes.create({
      ...classObject,
      proffy_id,
    });

    const insertAllSchedules = schedules.map(async schedule => {
      await Schedule.create({
        ...schedule,
        class_id,
      });
    });

    await Promise.all(insertAllSchedules);

    const { HOST, PORT } = process.env;
    return res.render('success.njk', {
      baseUrl: `http://${HOST}:${PORT}/study`,
      subject: data.subject,
      weekday: data.weekday[0],
      time: data.time_from[0],
    });
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
