"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Middleware {
    notFound(req, res, next) {
        res.status(404);
        const error = new Error(`Not Found - ${req.originalUrl}`);
        next(error);
    }
    errorHandler(req, res, next) {
        const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
        res.status(statusCode);
        res.json({
            message: "500 - an error occurred",
            stack: process.env.NODE_ENV === 'production' ? '' : "500 - an error occurred"
        });
    }
}
exports.default = Middleware;
