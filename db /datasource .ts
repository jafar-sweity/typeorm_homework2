import { error } from "console";
import { DataSource } from "typeorm";

const datasource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3000,
    username: 'root',
    password: '',
    database: '',
    synchronize: true,
    logging: true
})



const initialize = () => datasource.initialize().then(() => console.log('Connected to DB!')).catch((error) => console.log('some thing went wrong' + error))
