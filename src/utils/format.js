function Weekday(value, label) {
  this.value = value;
  this.label = label;
}

Weekday.prototype.short = function () {
  return this.label.split('-')[0];
};

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
  new Weekday(0, 'Domingo'),
  new Weekday(1, 'Segunda-feira'),
  new Weekday(2, 'Terça-feira'),
  new Weekday(3, 'Quarta-feira'),
  new Weekday(4, 'Quinta-feira'),
  new Weekday(5, 'Sexta-feira'),
  new Weekday(6, 'Sábado'),
];

function castToArray(data) {
  const dataArray = Array.isArray(data) ? [...data] : [data];
  return dataArray;
}

function getSubject(subjectNumber) {
  const position = subjectNumber - 1;
  return subjects[position].label;
}

function formatTime(time, truncate = false) {
  if (time === 0 && truncate) {
    return '';
  }

  if (time < 10) {
    time = `0${time}`;
  }

  return time;
}

function formatCost(cost) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(cost);
}

function convertHoursToMinutes(time) {
  const regex = new RegExp(/(\d{2}):(\d{2})/);

  if (typeof time !== 'string' || !regex.test(time)) {
    return time;
  }

  const [hour, minutes] = time.split(':');
  const totalMinutes = Number(hour * 60 + Number(minutes));

  return totalMinutes;
}

function convertMinutesToHours(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${formatTime(hours)}h${formatTime(minutes, true)}`;
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  castToArray,
  convertHoursToMinutes,
  convertMinutesToHours,
  formatCost,
};
