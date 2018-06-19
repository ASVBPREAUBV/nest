import {Controller, Get, HttpCode, Param, Post, Render} from '@nestjs/common';
import {UserProvider} from './user.provider';
import {User} from './user.entity';
import {SubscribeMessage, WsResponse} from '@nestjs/websockets';
import {from, Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Controller('user')
export class UserController {
    constructor(private readonly userProvider: UserProvider) {
    }

    @Get()
    async allUser(): Promise<User[]> {
        return this.userProvider.findAll();

    }

    @Get('/make/:id')
    @Render('index')
    root(@Param() param) {
        return {message: 'Hello world!', id: param.id};
    }

    @Get(':name')
    async findOne(@Param() param) {
        return this.userProvider.create(param.name);
    }

    @Post()
    @HttpCode(204)
    create() {
        return 'This action adds a new cat';
    }

    @SubscribeMessage('event')
    onEvent(client, data): Observable<WsResponse<number>> {
        const event = 'event';
        const response = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9];

        return from(response).pipe(map(res => ({event, data: res})));
    }

}