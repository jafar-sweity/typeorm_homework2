import express from 'express';
import { User } from '../db /entities/user.js';
import { role } from '../db /entities/role.js';
import { EntityManager } from 'typeorm';

async function assignRoleToUser(req: express.Request, res: express.Response) {
    try {
        const { userId, roleId } = req.body;
        const us: string = userId

        const user = await User.findOneBy({ id: us });
        const Roles = await role.findOneBy({ id: roleId })
        console.log(user + 'ooooooooooooowo');


        if (!user) {
            return res.status(404).json({ error: 'User not found' }).send(user);
        }

        if (!Roles) {
            return res.status(404).json({ error: 'Role not found' });
        }
        user.roles.push(Roles);



        await user.save();

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while assigning the role to the user' });
    }
}

export { assignRoleToUser };
