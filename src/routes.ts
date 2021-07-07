import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import PermissionController from './controllers/PermissionController';
import RoleController from './controllers/RoleController';

import fs from 'fs';
import marked from 'marked';

//import { is } from './middleWares/permission';

//import ChartController from './controllers/ChartController';
import SpecialistController from './controllers/SpecialistController';
import ClientController from './controllers/ClientController';
import ProfessionController from './controllers/ProfessionController';
import ServiceController from './controllers/ServiceController';
import {} from './database/'
import ChartController from './controllers/ChartController';

const router = Router();

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
router.get('*', limiter, speedLimiter,(req, res, next) => next());

router.get('/',(req, res) => {
    res.send('<h1>API is running...</h1>Questions? consult <a href="/docs/endpoints">Docs</a>')
});

import ZippCodeClient from './helpers/zippCode';
import AddressController from './controllers/AddressController';
router.get('/zippcode/:code', async (req, res) => {
    try {
        const zippCode = new ZippCodeClient();
        const data = await zippCode.get(req.params.code);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.get('/docs/endpoints', (_, res) => {
    var path = __dirname + '/docs/endpoints.md';
    var file = fs.readFileSync(path, 'utf8');
    res.send(marked(file.toString()));
});


router.post('/users', UserController.create);
router.post('/sessions', SessionController.create);
router.post('/permissions', PermissionController.create);
router.post('/roles', RoleController.create);
router.post('/professions', ProfessionController.create);

router.post('/specialists', SpecialistController.create);
router.post('/clients', ClientController.create);

router.post('/addresses', AddressController.create);
router.post('/services', ServiceController.create);
router.post('/charts', ChartController.create);


router.get('/roles/:name', RoleController.show);
router.get('/specialists', SpecialistController.index);

export { router };
