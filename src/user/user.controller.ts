import {Controller, Get, HttpCode, Param, Post, Render} from "@nestjs/common";
import {UserProvider} from "./user.provider";
import {User} from "./user.entity";
import {namespace} from "./user.config";
import * as browserify from "browserify";
import * as tsify from "tsify";


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
    brow(): string {
        browserify()
            .add('test.ts')
            .plugin('tsify')
            .bundle()
            .pipe(process.stdout);
        return 'asf';
    }

}