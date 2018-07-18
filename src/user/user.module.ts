import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {userDBProviders, UserProvider} from './user.provider';
import {DatabaseModule} from '../database/database.module';
import {UserGateway} from './user.gateway';

@Module({
    imports: [DatabaseModule],
    providers: [UserProvider, userDBProviders, UserGateway],
    controllers: [UserController],
})
export class UserModule {

}