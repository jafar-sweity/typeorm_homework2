import express from 'express';
import db from './db /datasource .js';
import UserRouter from './routers/user.js';
import roleRouter from './routers/role.js';
import permissionRouter from './routers/permission.js';
const app = express();
app.use(express.json());
const PORT = 3000;
app.use('/users', UserRouter);
app.use('/permissions', permissionRouter);
app.use('/roles', roleRouter);
app.listen(PORT, () => {
    console.log(`Hello From PORT ${PORT}`);
    db();
});
app.post('/user', (req, res) => {
});
