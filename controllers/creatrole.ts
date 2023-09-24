import expres from 'express';
import { getRepository } from 'typeorm';
import { role } from '../db /entities/role.js';
import express from 'express'
import { permission } from '../db /entities/permission.js';
async function createRole(req: express.Request, res: express.Response) {
    try {
        const { name, permissionIds } = req.body;


        const Role = new role();
        Role.name = name;
        Role.permission = permissionIds;
        const permissions = await permission.findBy(permissionIds);
        Role.permission = permissions

        await Role.save();

        res.status(201).json(Role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the role' });
    }
}

export { createRole };




