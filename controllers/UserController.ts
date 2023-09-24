import expres from 'express';
import { User } from '../db /entities/user.js';
async function createUser(req: expres.Request, res: expres.Response) {
    try {
        const { username, password, email } = req.body;

        const newUser = new User();
        newUser.username = username;
        newUser.password = password;
        newUser.email = email;

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
}

export { createUser };
