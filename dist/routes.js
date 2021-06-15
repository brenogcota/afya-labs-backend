"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const SessionController_1 = __importDefault(require("./controllers/SessionController"));
const PermissionController_1 = __importDefault(require("./controllers/PermissionController"));
const RoleController_1 = __importDefault(require("./controllers/RoleController"));
const ProductController_1 = __importDefault(require("./controllers/ProductController"));
const permission_1 = require("./middleWares/permission");
const ChartController_1 = __importDefault(require("./controllers/ChartController"));
const SpecialistController_1 = __importDefault(require("./controllers/SpecialistController"));
const ClientController_1 = __importDefault(require("./controllers/ClientController"));
const router = express_1.Router();
exports.router = router;
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
router.get('*', limiter, speedLimiter, (req, res, next) => next());
router.get('/', (req, res) => res.json({ "message": "is running.." }));
const zippCode_1 = __importDefault(require("./helpers/zippCode"));
router.get('/zippcode/:code', async (req, res) => {
    try {
        const zippCode = new zippCode_1.default();
        const data = await zippCode.get(req.params.code);
        return res.status(200).json(data);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
});
router.post('/users', UserController_1.default.create);
router.post('/sessions', SessionController_1.default.create);
router.post('/permissions', PermissionController_1.default.create);
router.post('/roles', RoleController_1.default.create);
router.post('/products', permission_1.is(["ROLE_ADMIN"]), ProductController_1.default.create);
router.get('/products', permission_1.is(["ROLE_ADMIN", "ROLE_USER"]), ProductController_1.default.index);
router.get('/products/:id', permission_1.is(["ROLE_ADMIN", "ROLE_USER"]), ProductController_1.default.show);
router.post('/charts', ChartController_1.default.create);
router.post('/specialists', SpecialistController_1.default.create);
router.post('/client', ClientController_1.default.create);
