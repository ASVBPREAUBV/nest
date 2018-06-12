import {Controller, Get, HttpCode, Param, Post} from '@nestjs/common';
import {UserProvider} from './user.provider';
import {User} from './user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userProvider: UserProvider) {
    }

    @Get()
    async allUser(): Promise<User[]> {
        return this.userProvider.findAll();

    }

    @Get(':id')
    async findOne(@Param() user: User) {
        return this.userProvider.create();
    }

    @Post()
    @HttpCode(204)
    create() {
        return 'This action adds a new cat';
    }
}