"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_routes_1 = __importDefault(require("./api.routes"));
const class_routes_1 = __importDefault(require("./class.routes"));
const routes = express_1.Router();
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const express_slow_down_1 = __importDefault(require("express-slow-down"));
const limiter = express_rate_limit_1.default({
    windowMs: 30 * 1000,
    max: 10
});
const speedLimiter = express_slow_down_1.default({
    windowMs: 30 * 1000,
    delayAfter: 1,
    delayMs: 500
});
routes.get('*', limiter, speedLimiter, async (request, response, next) => {
    next();
});
routes.get('/', (req, res) => {
    res.json({ message: 'Basic API' });
});
routes.use('/api', api_routes_1.default);
routes.use('/class', class_routes_1.default);
exports.default = routes;
