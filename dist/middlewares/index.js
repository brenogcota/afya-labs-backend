"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Middleware = /** @class */ (function () {
    function Middleware() {
    }
    Middleware.prototype.notFound = function (req, res, next) {
        res.status(404);
        var error = new Error("Not Found - " + req.originalUrl);
        next(error);
    };
    Middleware.prototype.errorHandler = function (req, res, next) {
        var statusCode = res.statusCode !== 200 ? res.statusCode : 500;
        res.status(statusCode);
        res.json({
            message: "500 - an error occurred",
            stack: process.env.NODE_ENV === 'production' ? '' : "500 - an error occurred"
        });
    };
    return Middleware;
}());
exports.default = Middleware;
