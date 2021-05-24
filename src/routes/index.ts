import { Router } from 'express';
import apiRouter from './api.routes';
import classRouter from './class.routes';

const routes = Router();

routes.use('/api', apiRouter);

routes.use('/class', classRouter);

export default routes;
