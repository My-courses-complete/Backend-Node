const express = require('express');

const config = require('./config');

const app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/json', function (req, res) {
  res.json({ hello: 'world' });
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
