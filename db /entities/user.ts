import { BaseEntity, Column, DataSource, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { role } from "./role.js";
import { profile } from "./profile.js";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string
    @ManyToMany(() => role, { cascade: true })
    @JoinTable()
    roles: role[]




}
