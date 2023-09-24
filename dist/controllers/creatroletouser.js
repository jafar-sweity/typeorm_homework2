// Import necessary modules and entities
import { getRepository } from 'typeorm';
import { User } from '../db /entities/user.js';
import { role } from '../db /entities/role.js';
async function assignRoleToUser(req, res) {
    try {
        const { userId, roleId } = req.body;
        const userRepository = getRepository(User);
        const user = await userRepository.findOne(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const roleRepository = getRepository(role);
        const Role = await roleRepository.findOne(roleId);
        if (!Role) {
            return res.status(404).json({ error: 'Role not found' });
        }
        user.roles.push(Role);
        await userRepository.save(user);
        res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while assigning the role to the user' });
    }
}
export { assignRoleToUser };
