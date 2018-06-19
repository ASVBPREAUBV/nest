import {SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse} from '@nestjs/websockets';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@WebSocketGateway(3001)
export class EventGateway {
    @SubscribeMessage('event')
    onEvent(client, data): Observable<WsResponse<number>> {
        const event = 'event';
        const response = [10, 5, 1];

        return from(response).pipe(map(res => ({event, data: res})));
    }
}