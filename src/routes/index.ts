import { Router } from 'express';
import apiRouter from './api.routes';

const routes = Router();

routes.use('/api', apiRouter);

export default routes;
