import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './user/user.module';
import {DatabaseModule} from './database/database.module';
import {databaseProviders} from './database/database.providers';
import {EventModule} from './event/event.module';

@Module({
    imports: [DatabaseModule, UserModule, EventModule],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
    constructor() {
        databaseProviders[0].useFactory();
    }
}