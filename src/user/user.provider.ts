import {Inject, Injectable} from "@nestjs/common";
import {User} from "./user.entity";
import {Connection, Repository} from "typeorm";
import {SubscribeMessage, WebSocketGateway, WsResponse} from "@nestjs/websockets";
import {from, Observable} from "rxjs/index";
import {websocket_port} from "../config";
import {map} from "rxjs/operators";

const namespace = 'user';

// Is a Provider
@Injectable()
@WebSocketGateway(websocket_port)
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
    onEvent(client, data): Observable<WsResponse<number>> {
        console.log(data);
        /*const user = new User();
         user.email = name;
         user.password_hash = '';
         const user_done = this.userRepository.save(user);*/
        // const response = [user];
        const response = [1, 2, 3];

        return from(response).pipe(map(res => ({event: namespace, data: res})));

        /*return fromPromise(user_done).pipe(map((data) => {
         console.log(data);
         return {event: namespace, data: {}};
         }));*/
    }
}

export const userDBProviders =
    {
        provide: 'userDBProviders',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['defaultDB'],
    };