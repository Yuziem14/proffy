const Proffy = require('../../repositories/proffy');
const Classes = require('../../repositories/classes');
const Schedule = require('../../repositories/schedule');

const proffys = require('./mocks');

async function run() {
  const insertAllProffys = proffys.map(async proffy => {
    const { name, avatar, phone_number, bio } = proffy;
    const { id: proffy_id } = await Proffy.create({
      name,
      avatar,
      phone_number,
      bio,
    });

    const { id: class_id } = await Classes.create({
      ...proffy.classObject,
      proffy_id,
    });

    const insertAllSchedules = proffy.schedules.map(async schedule => {
      await Schedule.create({ ...schedule, class_id });
    });

    await Promise.all(insertAllSchedules);
  });

  await Promise.all(insertAllProffys);
}

run().then(() => console.log('Database seeded'));
