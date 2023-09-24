import expres from 'express';
import { User } from '../db /entities/user.js';
import express from 'express'
async function createUser(req: express.Request, res: express.Response) {
    try {
        const { username, password, email } = req.body;

        const newUser = new User();
        newUser.username = username;
        newUser.password = password;
        newUser.email = email;

        // {
        //    "username":"jafar sweity",
        //    "password":"1212",
        //    "email":"jafar@gmail.com"

        // }

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
}

export { createUser };
