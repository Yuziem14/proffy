const path = require('path');
const express = require('express');

const server = express();

server.use(express.static('public'));

function sendPageLanding(req, res) {
  return res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
}

function sendPageStudy(req, res) {
  return res.sendFile(path.resolve(__dirname, 'views', 'study.html'));
}

function sendPageGiveClasses(req, res) {
  return res.sendFile(path.resolve(__dirname, 'views', 'give-classes.html'));
}

server.get('/', sendPageLanding);
server.get('/study', sendPageStudy);
server.get('/give-classes', sendPageGiveClasses);

const PORT = 5500;
server.listen(PORT, () =>
  console.log('Listening on http://127.0.0.1:3333/ ...')
);
