import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import { UserProvider } from './user.provider';

@Module({
    imports: [],
    providers: [UserProvider],
    controllers: [UserController],
})
export class UserModule {
}

