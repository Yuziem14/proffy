const Database = require('../db');

const proffys = require('./mocks');

async function createProffy(db, proffy) {
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

  return { ...proffy, id };
}

async function createClass(db, classObject, foreignKeys) {
  const { lastID: id } = await db.run(`
      INSERT INTO classes (
        subject,
        cost,
        proffy_id
      ) VALUES (
        ${classObject.subject},
        '${classObject.cost}',
        ${foreignKeys.proffy_id}
      );
  `);

  return { ...classObject, id };
}

async function createClassSchedule(db, classSchedule, foreignKeys) {
  const { lastID: id } = await db.run(`
    INSERT INTO class_schedule (
      weekday,
      time_from,
      time_to,
      class_id
    ) VALUES (
      '${classSchedule.weekday}',
      '${classSchedule.time_from}',
      '${classSchedule.time_to}',
      ${foreignKeys.class_id}
    );
  `);

  return { ...classSchedule, id };
}

async function run(db) {
  const insertedAllProffys = proffys.map(async proffy => {
    const { classes, id: proffy_id } = await createProffy(db, proffy);

    const insertedAllClasses = classes.map(async classObject => {
      const { schedules, id: class_id } = await createClass(db, classObject, {
        proffy_id,
      });

      const insertedAllSchedules = schedules.map(classSchedule =>
        createClassSchedule(db, classSchedule, {
          class_id,
        })
      );

      await Promise.all(insertedAllSchedules);
    });

    await Promise.all(insertedAllClasses);
  });

  await Promise.all(insertedAllProffys);
}

Database.then(run);
