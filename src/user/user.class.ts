import {UserInterface} from './user.interface';

export class UserClass implements UserInterface{
    id: number;
    name: string;
    isPublished: boolean;
}