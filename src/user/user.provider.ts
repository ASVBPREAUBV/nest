import {Inject, Injectable} from '@nestjs/common';
import {User} from './user.entity';
import {Connection, Repository} from 'typeorm';

// Is a Provider
@Injectable()
export class UserProvider {
    private readonly users: User[] = [];

    constructor(
        @Inject('userDBProviders')private readonly userRepository: Repository<User>,
    ) {
        //
    }

    create(user: User) {
        this.users.push(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
        //return [];
    }
}

export const userDBProviders =
    {
        provide: 'userDBProviders',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['default'],
    };