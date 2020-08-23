const Database = require('../database/db');

async function create(classObject) {
  const db = await Database;

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

module.exports = {
  create,
};
