import {createConnection} from 'typeorm';

export const databaseProviders =
    {
        provide: 'default',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'my-secret-pw',
            database: 'nest',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    };
