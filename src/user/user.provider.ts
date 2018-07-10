import {Inject, Injectable} from '@nestjs/common';
import {User} from './user.entity';
import {Connection, Repository} from 'typeorm';
import {SubscribeMessage, WebSocketGateway, WsResponse} from '@nestjs/websockets';
import {Observable} from 'rxjs/index';
import {host_websocket_port} from '../config';
import {map} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal/observable/fromPromise';

const namespace = 'user';

// Is a Provider
@Injectable()
@WebSocketGateway(host_websocket_port)
export class UserProvider {

    constructor(@Inject('userDBProviders') private readonly userRepository: Repository<User>) {
    }

    async create(name: string) {
        const user = new User();
        user.email = name;
        user.password_hash = '';
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    @SubscribeMessage(namespace)
    onEvent(client, data): Observable<WsResponse<User>> {
        const user = new User();
        user.email = 'random email' + Math.random();
        user.password_hash = 'random pw' + Math.random();
        const user_done = this.userRepository.save(user);
        return fromPromise(user_done).pipe(map((user_data) => {
            return {event: namespace, data: user_data};
        }));
    }

}

export const userDBProviders =
    {
        provide: 'userDBProviders',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['defaultDB'],
    };
