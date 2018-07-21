import {SubscribeMessage, WebSocketGateway, WsResponse} from "@nestjs/websockets";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {host_websocket_port} from "../config";
import {namespace} from "./user.config";
import {User} from "./user.entity";

@WebSocketGateway(host_websocket_port)
export class UserGateway {

    @SubscribeMessage(namespace)
    onEvent(client, data): Observable<WsResponse<User>> {
        const response = [{id: 999, email: 'test@example', password_hash: 'pw'}];
        console.log('UserGateway onEvent', data);

        return from(response).pipe(map(res => ({event: namespace, data: res})));
    }
}