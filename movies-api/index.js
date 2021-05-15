const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const slash = require('express-slash');

const { config } = require('./config');
const moviesApi = require('./routes/movies');
const {
  errorHandler,
  logErrors,
  wrapError,
} = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFounbHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// routes
moviesApi(app);

// express-slash
app.use(slash())

// Catch 404
app.use(notFoundHandler);

// Errores Middlewares
app.use(errorHandler);
app.use(wrapError);
app.use(logErrors);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
