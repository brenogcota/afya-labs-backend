import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import PermissionController from './controllers/PermissionController';
import RoleController from './controllers/RoleController';
import ProductController from './controllers/ProductController';

import { is } from './middlewares/permission';
import ChartController from './controllers/ChartController';
import SpecialistController from './controllers/SpecialistController';
import ClientController from './controllers/ClientController';

const router = Router();

router.post('/users', UserController.create);
router.post('/sessions', SessionController.create);
router.post('/permissions', PermissionController.create);
router.post('/roles', RoleController.create);

router.post('/products', is(["ROLE_ADMIN"]), ProductController.create);
router.get('/products', is(["ROLE_ADMIN", "ROLE_USER"]), ProductController.index);
router.get('/products/:id', is(["ROLE_ADMIN", "ROLE_USER"]), ProductController.show);

router.post('/charts', ChartController.create);
//router.get('/charts', ChartController.index);
router.post('/charts', ChartController.create);
router.post('/specialists', SpecialistController.create);
router.post('/clients', ClientController.create);




export { router };
