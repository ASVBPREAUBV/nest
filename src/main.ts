import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {logger} from "./config/logger";

async function bootstrap() {

    const app = await NestFactory.create(AppModule, {
       logger,
    });

    app.useStaticAssets(__dirname + '/static');
    app.setBaseViewsDir(__dirname + '/views');

    app.setViewEngine('hbs');

    await app.listen(3000);

}

bootstrap();
