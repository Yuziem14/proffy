const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');

dotenv.config();

const {
  sendPageStudy,
  sendPageLanding,
  sendPageGiveClasses,
  saveClasses,
} = require('./pages');

const server = express();

nunjucks.configure(path.resolve(__dirname, 'views'), {
  express: server,
  noCache: true,
});

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.get('/', sendPageLanding);
server.get('/study', sendPageStudy);
server.get('/give-classes', sendPageGiveClasses);
server.post('/save-classes', saveClasses);

const { HOST, PORT } = process.env;
server.listen(PORT, () => console.log(`Listening on ${HOST}:${PORT}/ ...`));
