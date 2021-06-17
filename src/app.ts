import express from 'express';
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

import { router } from './routes';
import Middleware from './middlewares';

const middleware = new Middleware();

require('dotenv').config();

const app = express();
app.set('trust proxy', 1)

app.use(morgan('dev'));
app.use(helmet());

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true, //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(router);

app.use(middleware.notFound)
app.use(middleware.errorHandler);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

export default app;
