import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Book{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    author: string;

    @Column()
    loan: boolean;
}