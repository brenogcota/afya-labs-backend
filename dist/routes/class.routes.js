"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassController_1 = __importDefault(require("../controllers/ClassController"));
const classController = new ClassController_1.default();
const classRouter = express_1.Router();
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
});
/** Rate limiting */
classRouter.get('*', limiter, speedLimiter, async (req, res, next) => next());
classRouter.post('/', classController.store);
classRouter.get('/', classController.index);
classRouter.get('/:name', classController.show);
exports.default = classRouter;
