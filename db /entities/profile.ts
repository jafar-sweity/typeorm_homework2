import { BaseEntity, Column, DataSource, Entity, PrimaryGeneratedColumn } from "typeorm";

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



}