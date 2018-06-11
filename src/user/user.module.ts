import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './user.entity';
import {UserController} from './user.controller';

@Module({
    imports: [],
    providers: [],
    controllers: [UserController],
})
export class UserModule {
}

