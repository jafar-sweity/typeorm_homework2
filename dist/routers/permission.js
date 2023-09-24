import express from 'express';
import { createPermission } from '../controllers/creatPermission.js';
const router = express.Router();
router.post('/', createPermission);
export default router;
