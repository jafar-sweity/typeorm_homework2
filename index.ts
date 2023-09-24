import express from 'express'
import { json } from 'stream/consumers';
import { DataSource } from 'typeorm';
import jwt from 'jsonwebtoken'
import db from './db /datasource .js'
import { User } from './db /entities/user.js';
import UserRouter from './routers/user.js'
const app = express();

app.use(express.json())
const PORT = 3000;


app.use('/user', UserRouter);
app.listen(PORT, () => {

    console.log(`Hello From PORT ${PORT}`);
    db();

})
app.post('/user', (req, res) => {

})