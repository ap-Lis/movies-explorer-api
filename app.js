require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const limiterHandler = require('./middlewares/rate-limiter');
const router = require('./routes/index');
const errorHandler = require('./middlewares/error-handler');
const corsHandler = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { DEFAULT_PORT, DEFAULT_DB_URL } = require('./utils/credentials');

const { PORT = DEFAULT_PORT, DB_URL = DEFAULT_DB_URL } = process.env;

const app = express();

app.use(corsHandler);

app.use(helmet());

app.use(limiterHandler);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
