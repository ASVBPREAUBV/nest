import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as path from "path";

async function bootstrap() {

    const express = require('express')
    const e_app = express()

    const absolutePath = path.resolve('scripts');
    console.log(absolutePath);
    e_app.use('/static', express.static(absolutePath))



    e_app.listen(3003, () => console.log('Example app listening on port 3000!'))

    const app = await NestFactory.create(AppModule);

    app.useStaticAssets(__dirname + '/public');
    app.setBaseViewsDir(__dirname + '/views');
    app.setViewEngine('hbs');

    await app.listen(3000);

}

bootstrap();
