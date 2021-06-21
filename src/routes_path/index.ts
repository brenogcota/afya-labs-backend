import { Router, Request, Response, NextFunction } from 'express';
import apiRouter from './api.routes';
import classRouter from './class.routes';

const routes = Router();

import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

const limiter = rateLimit({
    windowMs: 30 * 1000,
    max: 10
});

const speedLimiter = slowDown({
    windowMs: 30 * 1000,
    delayAfter: 1,
    delayMs: 500
})

routes.get('*', limiter, speedLimiter, async (request: Request, response: Response, next: NextFunction) => {
    next();
});

routes.get('/', (req: Request, res: Response) => {
    res.json({message: 'Basic API'});
});

routes.use('/api', apiRouter);

routes.use('/class', classRouter);

export default routes;
