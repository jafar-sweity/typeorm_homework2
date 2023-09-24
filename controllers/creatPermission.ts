import { getRepository } from 'typeorm';
import { permission } from '../db /entities/permission.js';
import express from 'express'

async function createPermission(req: express.Request, res: express.Response) {
    try {
        const { name } = req.body;

        const newPermission = new permission();
        newPermission.name = name;

        await newPermission.save();

        res.status(201).json(newPermission);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the permission' });
    }
}

export { createPermission };
