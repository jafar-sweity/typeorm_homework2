import { BaseEntity, Column, DataSource, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.js";

@Entity()
export class profile extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    dateOfBirth: Date

    @OneToOne(() => User)
    @JoinColumn()
    user: User;


}