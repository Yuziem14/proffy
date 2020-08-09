async function createSchedule(db, schedule) {
  const { lastID: id } = await db.run(`
    INSERT INTO class_schedule (
      weekday,
      time_from,
      time_to,
      class_id
    ) VALUES (
      '${schedule.weekday}',
      '${schedule.time_from}',
      '${schedule.time_to}',
      ${schedule.class_id}
    );
  `);

  return {
    id,
    ...schedule,
  };
}

module.exports = createSchedule;
