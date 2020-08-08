async function createProffy(db, proffy) {
  const { classObject, schedules } = proffy;

  const { lastID: proffy_id } = await db.run(`
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

  const { lastID: class_id } = await db.run(`
  INSERT INTO classes (
    subject,
    cost,
    proffy_id
  ) VALUES (
    ${classObject.subject},
    '${classObject.cost}',
    ${proffy_id}
  );
`);

  const insertedAllSchedules = schedules.map(async schedule => {
    await db.run(`
    INSERT INTO class_schedule (
      weekday,
      time_from,
      time_to,
      class_id
    ) VALUES (
      '${schedule.weekday}',
      '${schedule.time_from}',
      '${schedule.time_to}',
      ${class_id}
    );
  `);
  });

  await Promise.all(insertedAllSchedules);

  return {
    ...proffy,
    id: proffy_id,
    classObject: {
      ...classObject,
      id: class_id,
    },
    schedules,
  };
}

module.exports = createProffy;
