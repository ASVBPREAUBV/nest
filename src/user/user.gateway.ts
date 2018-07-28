import {SubscribeMessage, WebSocketGateway, WsResponse} from "@nestjs/websockets";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {host_websocket_port} from "../config/constants";
import {namespace} from "./user.config";
import {User} from "./user.entity";
import {UserProvider} from "./user.provider";
import {async} from "rxjs/internal/scheduler/async";
import {fromPromise} from "rxjs/internal/observable/fromPromise";

@WebSocketGateway(host_websocket_port)
export class UserGateway {

    constructor(private readonly userProvider: UserProvider) {
    }

    @SubscribeMessage(namespace)
    onCreateEvent(client, request: User): Observable<WsResponse<User>> {
        const userObserver = fromPromise(this.userProvider.create(request));
        return userObserver.pipe(map(res => ({event: namespace, data: res})));
    }
}