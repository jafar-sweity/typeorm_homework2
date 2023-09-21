import { BaseEntity, Column, DataSource, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { role } from "./role.js";

@Entity()
export class permission extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string



}