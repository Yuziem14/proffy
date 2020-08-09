const Database = require('../db');
const proffys = require('./mocks');
const createProffy = require('../createProffy');
const createClass = require('../createClass');
const createSchedule = require('../createSchedule');

async function run(db) {
  const insertAllProffys = proffys.map(async proffy => {
    const { name, avatar, phone_number, bio } = proffy;
    const { id: proffy_id } = await createProffy(db, {
      name,
      avatar,
      phone_number,
      bio,
    });

    const { id: class_id } = await createClass(db, {
      ...proffy.classObject,
      proffy_id,
    });

    const insertAllSchedules = proffy.schedules.map(async schedule => {
      await createSchedule(db, { ...schedule, class_id });
    });

    await Promise.all(insertAllSchedules);
  });

  await Promise.all(insertAllProffys);
}

Database.then(run);
