import { BaseEntity, Column, DataSource, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.js";
import { permission } from "./permission.js";

@Entity()
export class role extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @ManyToMany(() => User)
    user: User

    @ManyToMany(() => permission)
    @JoinTable()
    permission: permission




}