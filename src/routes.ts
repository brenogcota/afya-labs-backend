import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import PermissionController from './controllers/PermissionController';
import RoleController from './controllers/RoleController';

//import { is } from './middlewares/permission';
//import ChartController from './controllers/ChartController';
import SpecialistController from './controllers/SpecialistController';
import ClientController from './controllers/ClientController';
import ProfessionController from './controllers/ProfessionController';
import ServiceController from './controllers/ServiceController';
import {} from './database/'
import ChartController from './controllers/ChartController';

const router = Router();

router.post('/users', UserController.create);
router.post('/sessions', SessionController.create);
router.post('/permissions', PermissionController.create);
router.post('/roles', RoleController.create);
router.post('/professions', ProfessionController.create);

router.post('/specialists', SpecialistController.create);

router.post('/clients', ClientController.create);
router.post('/services', ServiceController.create);
router.post('/charts', ChartController.create);


export { router };
