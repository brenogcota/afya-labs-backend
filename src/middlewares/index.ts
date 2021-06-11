import { Request, Response, NextFunction } from 'express';

interface IMiddleware {
    notFound: (req: Request, res: Response, next: NextFunction) => void,
    errorHandler: (req: Request, res: Response, next: NextFunction) => void
}

export default class Middleware implements IMiddleware {

    public notFound(req: Request, res: Response, next: NextFunction) {
        res.status(404);
        const error = new Error(`Not Found - ${req.originalUrl}`);
        next(error);
    }

    public errorHandler(req: Request, res: Response, next: NextFunction) {
        const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
        res.status(statusCode);
        res.json({
          message: "500 - an error occurred",
          stack: process.env.NODE_ENV === 'production' ? '' : "500 - an error occurred"
        });
    }
}