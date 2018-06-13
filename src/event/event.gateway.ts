import {
    WebSocketGateway,
    SubscribeMessage,
    WsResponse,
    WebSocketServer,
    WsException,
} from '@nestjs/websockets';
import {Observable, from} from 'rxjs';
import {map} from 'rxjs/operators';

@WebSocketGateway(3001)
export class EventGateway {
    @WebSocketServer() server;

    @SubscribeMessage('event')
    onEvent(client, data): Observable<WsResponse<number>> {
        console.log(data);
        const event = 'event';
        const response = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9];

        return from(response).pipe(map(res => ({event, data: res})));
    }
}