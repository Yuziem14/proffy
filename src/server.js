const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

nunjucks.configure(path.resolve(__dirname, 'views'), {
  express: server,
  noCache: true,
});

server.use(express.static('public'));

const proffys = [
  {
    name: 'Yuri Ziemba',
    avatar:
      'https://avatars3.githubusercontent.com/u/42475688?s=460&u=6b2fb798bcd408da8bcc5304311c17babb11e651&v=4',
    phone_number: '5500930224556',
    bio: `Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.`,
    subject: 'Química',
    cost: 20,
    weekday: [0],
    time_from: [480],
    time_to: [720],
  },
  {
    name: 'Yuri Ziemba',
    avatar:
      'https://avatars3.githubusercontent.com/u/42475688?s=460&u=6b2fb798bcd408da8bcc5304311c17babb11e651&v=4',
    phone_number: '5500930224556',
    bio: `Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.`,
    subject: 'Química',
    cost: 20,
    weekday: [0],
    time_from: [480],
    time_to: [720],
  },
];

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

function sendPageLanding(req, res) {
  return res.render('index.html');
}

function sendPageStudy(req, res) {
  const filters = req.query;

  return res.render('study.html', {
    proffys,
    filters,
    subjects,
    weekdays,
  });
}

function sendPageGiveClasses(req, res) {
  const newProffy = req.query;

  const isNotEmpty = Object.keys(newProffy).length > 0;
  if (isNotEmpty) {
    newProffy.subject = getSubject(newProffy.subject);
    proffys.push(newProffy);
    return res.redirect('/study');
  }

  return res.render('give-classes.html', { subjects, weekdays });
}

server.get('/', sendPageLanding);
server.get('/study', sendPageStudy);
server.get('/give-classes', sendPageGiveClasses);

const PORT = 5500;
server.listen(PORT, () =>
  console.log('Listening on http://127.0.0.1:3333/ ...')
);
