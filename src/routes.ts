import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import PermissionController from './controllers/PermissionController';
import RoleController from './controllers/RoleController';
import ProductController from './controllers/ProductController';

import { is } from './middleWares/permission';
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

router.get('/',(req, res) => res.json({"message": "is running.."}));

import ZippCodeClient from './helpers/zippCode';
router.get('/zippcode/:code', async (req, res) => {
    try {
        const zippCode = new ZippCodeClient();
        const data = await zippCode.get(req.params.code);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});


router.post('/users', UserController.create);
router.post('/sessions', SessionController.create);
router.post('/permissions', PermissionController.create);
router.post('/roles', RoleController.create);

router.post('/products', is(["ROLE_ADMIN"]), ProductController.create);
router.get('/products', is(["ROLE_ADMIN", "ROLE_USER"]), ProductController.index);
router.get('/products/:id', is(["ROLE_ADMIN", "ROLE_USER"]), ProductController.show);

router.post('/charts', ChartController.create);




export { router };
