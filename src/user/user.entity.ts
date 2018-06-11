import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {UserInterface} from './user.interface';

@Entity()
export class User implements UserInterface{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column()
    isPublished: boolean;

}