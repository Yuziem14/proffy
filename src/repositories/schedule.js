const Database = require('../database/db');

const {
  weekdays,
  castToArray,
  convertHoursToMinutes,
  convertMinutesToHours,
} = require('../utils/format');

async function create(schedule) {
  const db = await Database;

  const { lastID: id } = await db.run(`
    INSERT INTO class_schedule (
      weekday,
      time_from,
      time_to,
      class_id
    ) VALUES (
      '${schedule.weekday}',
      '${convertHoursToMinutes(schedule.time_from)}',
      '${convertHoursToMinutes(schedule.time_to)}',
      ${schedule.class_id}
    );
  `);

  return {
    id,
    ...schedule,
  };
}

async function allFromProffy(proffyId, shouldSerialize = false) {
  const db = await Database;

  const query = `
    SELECT class_schedule.weekday, class_schedule.time_from, class_schedule.time_to
      FROM class_schedule
      JOIN classes ON (classes.id = class_schedule.class_id)
      JOIN proffys ON (classes.proffy_id = proffys.id)
      WHERE proffy_id = ${proffyId} ORDER BY class_schedule.weekday, class_schedule.time_from
  `;
  const proffySchedules = await db.all(query);

  if (shouldSerialize) {
    return serialize(proffySchedules);
  }

  return proffySchedules;
}

async function serialize(originalSchedules) {
  const schedules = castToArray(originalSchedules);

  const initialSchedules = weekdays.map(day => ({
    weekday: day.short(),
    timeRanges: [],
  }));

  const serialized = schedules.reduce((array, value) => {
    value.weekday = weekdays[value.weekday];

    const index = array.findIndex(
      schedule => schedule.weekday === value.weekday.short()
    );

    if (index < 0) return array;

    const schedule = array[index];
    schedule.timeRanges = [
      ...schedule.timeRanges,
      [
        convertMinutesToHours(value.time_from),
        convertMinutesToHours(value.time_to),
      ],
    ];
    array[index] = schedule;

    return array;
  }, initialSchedules);

  return serialized;
}

module.exports = { create, allFromProffy, serialize };
