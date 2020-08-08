const path = require('path');
const Database = require('sqlite-async');

const [resetArgument] = process.argv.splice(2);

const DB_FILE_PATH = path.resolve(__dirname, 'database.sqlite');

function execute(db) {
  return db.exec(`
  ${
    resetArgument === '--reset'
      ? `DROP TABLE IF EXISTS class_schedule;
    DROP TABLE IF EXISTS classes;
    DROP TABLE IF EXISTS proffys;`
      : ''
  }
    CREATE TABLE IF NOT EXISTS proffys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      phone_number TEXT,
      bio TEXT
    );

    CREATE TABLE IF NOT EXISTS classes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject INTEGER,
      cost TEXT,
      proffy_id INTEGER,
      FOREIGN KEY(proffy_id) REFERENCES proffys(id)
    );

    CREATE TABLE IF NOT EXISTS class_schedule (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      weekday INTEGER,
      time_from INTEGER,
      time_to INTEGER,
      class_id INTEGER,
      FOREIGN KEY(class_id) REFERENCES classes(id)
    );
  `);
}

module.exports = Database.open(DB_FILE_PATH).then(execute);
