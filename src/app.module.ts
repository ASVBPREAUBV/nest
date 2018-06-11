import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';

const db = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'my-secret-pw',
    database: 'nest',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
})

@Module({
    imports: [db],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
