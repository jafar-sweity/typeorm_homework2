import express from 'express'
import { DataSource } from 'typeorm';

const app = express();


const PORT = 3000;




app.listen(PORT, () => {

    console.log(`Hello From PORT ${PORT}`);

})