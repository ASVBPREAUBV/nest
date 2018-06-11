import {Controller, Get, HttpCode, Param, Post} from '@nestjs/common';
import {UserClass} from './user.class';
import {UserProvider} from './user.provider';

@Controller('users')
export class UserController {
    constructor(private readonly userProvider: UserProvider) {
    }

    @Get()
    async allUser(): Promise<UserClass[]> {
        const users = this.userProvider.findAll();

        return users;

    }

    @Get(':id')
    findOne(@Param() userClass: UserClass) {
        console.log(userClass);
        this.userProvider.create(userClass);
        return `This action returns a user id #${userClass.id}`;
    }

    @Post()
    @HttpCode(204)
    create() {
        return 'This action adds a new cat';
    }
}