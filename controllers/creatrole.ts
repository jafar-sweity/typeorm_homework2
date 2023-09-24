import expres from 'express';
import { getRepository } from 'typeorm';
import { role } from '../db /entities/role.js';
import express from 'express'
async function createRole(req: express.Request, res: express.Response) {
    try {
        const { name, permissions } = req.body;

        const Role = new role();
        Role.name = name;
        Role.permission = permissions;

        const roleRepository = getRepository(role);
        await roleRepository.save(role);

        res.status(201).json(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the role' });
    }
}

export { createRole };