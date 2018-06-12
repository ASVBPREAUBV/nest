import {Inject, Injectable} from '@nestjs/common';
import {User} from './user.entity';
import {Connection, Repository} from 'typeorm';

// Is a Provider
@Injectable()
export class UserProvider {
    private readonly users: User[] = [];

    constructor(
        @Inject('userDBProviders') private readonly userRepository: Repository<User>,
    ) {
    }

    async create() {
        const user = new User();
        user.name = 'avy';
        user.isPublished  = false;
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}

export const userDBProviders =
    {
        provide: 'userDBProviders',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['defaultDB'],
    };