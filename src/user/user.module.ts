import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {userDBProviders, UserProvider} from './user.provider';
import {DatabaseModule} from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [UserProvider, userDBProviders],
    controllers: [UserController],
})
export class UserModule {

}