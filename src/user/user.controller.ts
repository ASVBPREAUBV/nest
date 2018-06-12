import {Controller, Get, HttpCode, Param, Post} from '@nestjs/common';
import {UserClass} from './user.class';
import {UserProvider} from './user.provider';
import {DatabaseModule} from '../database/database.module';

@Controller('users')
export class UserController {
    constructor(private readonly userProvider: UserProvider) {
    }

    @Get()
    async allUser(): Promise<UserClass[]> {
        return this.userProvider.findAll();

    }

    @Get(':id')
    findOne(@Param() userClass: UserClass) {
        this.userProvider.create(userClass);
        return `This action returns a user id #${userClass.id}`;
    }

    @Post()
    @HttpCode(204)
    create() {
        return 'This action adds a new cat';
    }
}