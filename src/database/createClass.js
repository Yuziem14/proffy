async function createClass(db, classObject) {
  const { lastID: class_id } = await db.run(`
  INSERT INTO classes (
    subject,
    cost,
    proffy_id
  ) VALUES (
    ${classObject.subject},
    '${classObject.cost}',
    ${classObject.proffy_id}
  );
`);

  return {
    id: class_id,
    ...classObject,
  };
}

module.exports = createClass;
