import {SubscribeMessage, WebSocketGateway, WsResponse} from '@nestjs/websockets';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {host_websocket_port} from '../config';

@WebSocketGateway(host_websocket_port)
export class EventGateway {
    private readonly event_name:string = 'event';


    @SubscribeMessage('event')
    onEvent(client, data): Observable<WsResponse<number>> {
        const event = 'event';
        const response = [99, 98, 97];
        console.log(data)

        return from(response).pipe(map(res => ({event, data: res})));
    }
}