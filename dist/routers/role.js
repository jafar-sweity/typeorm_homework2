import express from 'express';
import { createRole } from '../controllers/creatrole.js';
const router = express.Router();
router.post('/', createRole);
export default router;
