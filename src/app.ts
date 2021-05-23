import express from 'express';
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

import routes from './routes';
import Middleware from './middlewares';

const middleware = new Middleware();

require('dotenv').config();

const app = express();
app.set('trust proxy', 1)

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(routes);

app.use(middleware.notFound)
app.use(middleware.errorHandler);

export default app;
