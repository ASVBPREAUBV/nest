import {User} from "./user.entity";
import {Observable} from "rxjs/index";
import * as socketIo from "socket.io-client";
import {host_websocket_url} from "../config";
import {namespace} from "./user.config";

export class SocketService {
    private socket;

    public initSocket(): void {
        this.socket = socketIo(host_websocket_url);
    }

    public send(message: User): void {
        this.socket.emit(namespace, message);
    }

    public onMessage(): Observable<User> {
        return new Observable<User>(observer => {
            this.socket.on(namespace, (data: User) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}

const ss = new SocketService();
ss.initSocket();
ss.send({id: 234, email: 'sfd', password_hash: 'sdf'})
