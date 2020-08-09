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

  return {
    id,
    ...proffy,
  };
}

module.exports = createProffy;
