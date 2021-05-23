import { Router } from 'express';
import classRouter from './api.routes';

const routes = Router();

routes.use('/api', classRouter);

export default routes;
