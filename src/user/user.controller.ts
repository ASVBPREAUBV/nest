import {Controller, Get, HttpCode, Param, Post, Render} from '@nestjs/common';
import {UserProvider} from './user.provider';
import {namespace} from './user.config';
import {build} from './user.build';
build();

@Controller(namespace)
export class UserController {
    constructor(private readonly userProvider: UserProvider) {
    }

    /*@Get()
     async allUser(): Promise<User[]> {
     return this.userProvider.findAll();

     }*/

    @Get('/make/:id')
    @Render('index')
    root(@Param() param) {
        return {message: 'Hello world!', id: param.id};
    }

    @Get('/view')
    @Render('user')
    view() {
        return {message: 'Hello world!', id: 'test'};
    }

    @Get('/view2')
    @Render('test')
    view2() {
        return {message: 'Hello world!', id: 'test'};
    }

    @Get('/create/:name')
    async findOne(@Param() param) {
        return this.userProvider.create(param.name);
    }

    @Post()
    @HttpCode(204)
    create() {
        return 'This action adds a new cat';
    }
}
