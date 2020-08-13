const subjects = [
  { value: 1, label: 'Artes' },
  { value: 2, label: 'Biologia' },
  { value: 3, label: 'Ciências' },
  { value: 4, label: 'Educação Física' },
  { value: 5, label: 'Física' },
  { value: 6, label: 'Geografia' },
  { value: 7, label: 'História' },
  { value: 8, label: 'Matemática' },
  { value: 9, label: 'Português' },
  { value: 10, label: 'Química' },
];

const weekdays = [
  { value: 0, label: 'Domingo' },
  { value: 1, label: 'Segunda-feira' },
  { value: 2, label: 'Terça-feira' },
  { value: 3, label: 'Quarta-feira' },
  { value: 4, label: 'Quinta-feira' },
  { value: 5, label: 'Sexta-feira' },
  { value: 6, label: 'Sábado' },
];

function getSubject(subjectNumber) {
  const position = subjectNumber - 1;
  return subjects[position].label;
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
