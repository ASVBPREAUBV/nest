import {Controller, Get, HttpCode, Param, Post, Render} from '@nestjs/common';
import {UserProvider} from './user.provider';
import {namespace} from './user.config';
import * as browserify from 'browserify';
import * as tsify from 'tsify';
import * as fs from 'fs';

@Controller(namespace)
export class UserController {
    constructor(private readonly userProvider: UserProvider) {
    }

    /*@Get()
     async allUser(): Promise<User[]> {
     return this.userProvider.findAll();

     }*/

    @Get('/make/:id')
    @Render('index')
    root(@Param() param) {
        return {message: 'Hello world!', id: param.id};
    }

    @Get(':name')
    async findOne(@Param() param) {
        return this.userProvider.create(param.name);
    }

    @Post()
    @HttpCode(204)
    create() {
        return 'This action adds a new cat';
    }

    @Get()
    jsout(): string {
        const bundleFs = fs.createWriteStream(__dirname + '/bundle.js');

        browserify()
            .add(__dirname + '/user.client.ts')
            .plugin('tsify')
            .bundle()
            .pipe(bundleFs);

        bundleFs.on('finish', function() {
            console.log('finished writing the browserify file');
        });

        return 'asf';
    }

}