import {Module} from '@nestjs/common';
import {SocketProvider} from "./socket.provider";

@Module({
    providers: [SocketProvider],
})
export class SocketModule {
}
