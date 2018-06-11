import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
    findAll() {
        return 'This action returns all users';
    }
}