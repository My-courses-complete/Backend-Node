const express = require('express');

const { config } = require('./config');
const moviesApi = require('./routes/movies');

const app = express();

// Middlewares
app.use(express.json());

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
