const Database = require('../database/db');

const {
  convertHoursToMinutes,
  castToArray,
  getSubject,
  formatCost,
} = require('../utils/format');

async function count() {
  const db = await Database;

  const query = `
    SELECT count(*) as total FROM proffys
  `;

  const { total } = await db.get(query);
  return total;
}

async function create(proffy) {
  const db = await Database;
  const { lastID: id } = await db.run(`
    INSERT INTO proffys (
      name,
      avatar,
      phone_number,
      bio
    ) VALUES (
      '${proffy.name}',
      '${proffy.avatar}',
      '${proffy.phone_number}',
      '${proffy.bio}'
    );
  `);

  return {
    id,
    ...proffy,
  };
}

async function filter(filters, shouldSerialize = false) {
  const db = await Database;
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

  const proffys = await db.all(query);

  if (shouldSerialize) {
    return serialize(proffys);
  }

  return proffys;
}

async function serialize(originalProffys) {
  const proffys = castToArray(originalProffys);
  const serialized = proffys.map(proffy => ({
    ...proffy,
    cost: formatCost(proffy.cost),
    subject: getSubject(proffy.subject),
  }));

  return serialized;
}

module.exports = {
  count,
  create,
  filter,
  serialize,
};
