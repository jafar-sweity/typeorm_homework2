// Import necessary modules and entities
import { getRepository } from 'typeorm';
import { permission } from '../db /entities/permission.js';
import express from 'express'

// Define the controller function for creating a permission
async function createPermission(req: express.Request, res: express.Response) {
    try {
        const { name } = req.body;

        const Permission = new permission();
        Permission.name = name;

        const permissionRepository = getRepository(permission);
        await permissionRepository.save(permission);

        res.status(201).json(permission);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the permission' });
    }
}

export { createPermission };
