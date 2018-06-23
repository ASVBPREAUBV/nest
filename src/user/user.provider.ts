import {Inject, Injectable} from '@nestjs/common';
import {User} from './user.entity';
import {Connection, Repository} from 'typeorm';
import {SubscribeMessage, WebSocketGateway, WsResponse} from '@nestjs/websockets';
import {from, Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

// Is a Provider
@Injectable()
@WebSocketGateway(3001)
export class UserProvider {
    private readonly event_name = 'user';

    constructor(
        @Inject('userDBProviders') private readonly userRepository: Repository<User>,
    ) {
    }

    async create(name: string) {
        const user = new User();
        user.email = name;
        user.password_hash  = '';
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    @SubscribeMessage('user')
    onEvent(client, data): Observable<WsResponse<User>> {
        const event = this.event_name
        const user = new User();
        user.email = name;
        user.password_hash  = '';
        const response = [user];

        return from(response).pipe(map(res => ({event, data: res})));
    }
}

export const userDBProviders =
    {
        provide: 'userDBProviders',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['defaultDB'],
    };