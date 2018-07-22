import {Inject, Injectable} from "@nestjs/common";
import {User} from "./user.entity";
import {Connection, Repository} from "typeorm";
import {WebSocketGateway} from "@nestjs/websockets";
import {host_websocket_port} from "../config";

const namespace = 'user';

// Is a Provider
@Injectable()
@WebSocketGateway(host_websocket_port)
export class UserProvider {

    constructor(@Inject('userDBProviders') private readonly userRepository: Repository<User>) {
    }

    async create(new_user: User) {
        console.log('UserProvider new_user', new_user);
        let user = new User();
        user = new_user;
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
