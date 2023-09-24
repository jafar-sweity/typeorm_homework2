import express from 'express'
import { createUser } from '../controllers/UserController.js';
import { User } from '../db /entities/user.js';
import { assignRoleToUser } from '../controllers/creatroletouser.js'

const router = express.Router();



router.post('/', createUser);
router.post('/assignrole', assignRoleToUser);
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findOneBy({ id: userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


export default router;
