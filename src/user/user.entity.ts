import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {UserInterface} from './user.interface';

@Entity()
export class User implements UserInterface{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    email: string;

    @Column('text')
    password_hash: string;

}