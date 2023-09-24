import express from 'express'
import { createUser } from '../controllers/UserController.js';
import { User } from '../db /entities/user.js';


const router = express.Router();



router.post('/', createUser);

export default router;
