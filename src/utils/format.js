const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação Física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química',
];

const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

function getSubject(subjectNumber) {
  const position = subjectNumber - 1;
  return subjects[position];
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(':');
  const totalMinutes = Number(hour * 60 + Number(minutes));

  return totalMinutes;
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
};
