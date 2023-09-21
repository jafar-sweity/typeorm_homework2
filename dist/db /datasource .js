import { DataSource } from "typeorm";
import { permission } from "./entities/permission.js";
import { profile } from "./entities/profile.js";
import { role } from "./entities/role.js";
import { User } from "./entities/user.js";
const datasource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    entities: [User, permission, profile, role],
    username: 'root',
    password: '',
    database: 'jwt_typeorm',
    synchronize: true,
    logging: true,
});
const initialize = () => datasource.initialize().then(() => console.log('Connected to DB!')).catch((error) => console.log('some thing went wrong' + error));
export default initialize;
