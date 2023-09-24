import express from 'express'
import { createUser } from '../controllers/UserController.js';
import { User } from '../db /entities/user.js';
import { createPermission } from '../controllers/creatPermission.js';
import { createRole } from '../controllers/creatrole.js';


const router = express.Router();



router.post('/', createRole);

export default router;
