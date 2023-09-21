import express from 'express';
import db from './db /datasource .js';
const app = express();
app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Hello From PORT ${PORT}`);
    db();
});
app.post('/user', (req, res) => {
});
