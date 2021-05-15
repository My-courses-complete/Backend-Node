const express = require('express');

const { config } = require('./config');
const moviesApi = require('./routes/movies');
const { errorHandler, logErrors } = require('./utils/middleware/errorHandler');

const app = express();

// Middlewares
app.use(express.json());

moviesApi(app);

app.use(errorHandler);
app.use(logErrors);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
