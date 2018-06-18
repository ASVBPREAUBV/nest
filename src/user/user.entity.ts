import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    email: string;

    @Column('text')
    password_hash: string;

}