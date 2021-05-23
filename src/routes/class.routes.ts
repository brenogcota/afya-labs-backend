import { Router, Request, Response, NextFunction } from 'express';
import ClassController from '../controllers/classController';

const classController = new ClassController();

const classRouter = Router();

const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const limiter = rateLimit({
    windowMs: 30 * 1000,
    max: 10
});

const speedLimiter = slowDown({
    windowMs: 30 * 1000,
    delayAfter: 1,
    delayMs: 500
})

/** Rate limiting */
classRouter.get('*', limiter, speedLimiter, async (req: Request, res: Response, next: NextFunction) => next());

classRouter.post('/', classController.store);
classRouter.get('/', classController.index);
classRouter.get('/:name', classController.show);

export default classRouter;
