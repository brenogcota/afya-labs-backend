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
const fs_1 = __importDefault(require("fs"));
const marked_1 = __importDefault(require("marked"));
//import { is } from './middleWares/permission';
//import ChartController from './controllers/ChartController';
const SpecialistController_1 = __importDefault(require("./controllers/SpecialistController"));
const ClientController_1 = __importDefault(require("./controllers/ClientController"));
const ProfessionController_1 = __importDefault(require("./controllers/ProfessionController"));
const ServiceController_1 = __importDefault(require("./controllers/ServiceController"));
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
router.get('/', (req, res) => {
    res.send('<h1>API is running...</h1>Questions? consult <a href="/docs/endpoints">Docs</a>');
});
const zippCode_1 = __importDefault(require("./helpers/zippCode"));
const AddressController_1 = __importDefault(require("./controllers/AddressController"));
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
router.get('/docs/endpoints', (_, res) => {
    var path = __dirname + '/docs/endpoints.md';
    var file = fs_1.default.readFileSync(path, 'utf8');
    res.send(marked_1.default(file.toString()));
});
router.post('/users', UserController_1.default.create);
router.post('/sessions', SessionController_1.default.create);
router.post('/permissions', PermissionController_1.default.create);
router.post('/roles', RoleController_1.default.create);
router.post('/professions', ProfessionController_1.default.create);
router.post('/specialists', SpecialistController_1.default.create);
router.post('/clients', ClientController_1.default.create);
router.post('/addresses', AddressController_1.default.create);
router.post('/services', ServiceController_1.default.create);
router.get('/roles/:name', RoleController_1.default.show);
