import {SubscribeMessage, WebSocketGateway, WsResponse} from "@nestjs/websockets";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {host_websocket_port} from "../config";
import {namespace} from "./user.config";

@WebSocketGateway(host_websocket_port)
export class UserGateway {

    @SubscribeMessage(namespace)
    onEvent(client, data): Observable<WsResponse<number>> {
        const response = [99, 98, 97];
        console.log('user gateway @SubscribeMessage(namespace)', data);

        return from(response).pipe(map(res => ({'event': namespace, data: res})));
    }
}