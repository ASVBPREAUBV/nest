import {User} from './user.entity';
import {Observable} from 'rxjs/index';
import * as socketIo from 'socket.io-client';
import {host_websocket_url} from '../config/constants';
import {namespace} from './user.config';

export class SocketService {
    private socket;

    constructor(){
        console.log('SocketService constructor()');
    }

    public initSocket(): void {
        console.log('initSocket connection to: ',host_websocket_url);
        this.socket = socketIo(host_websocket_url);
        this.socket.on(namespace, (data) => {
            console.log('this.socket.on',data);
        });
    }

    public send(message: User): void {
        console.log('send', message);
        this.socket.emit(namespace, message);
    }

    public onMessage(): Observable<User> {
        console.log('onMessage');
        return new Observable<User>(observer => {
            this.socket.on(namespace, (data: User) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        console.log('onEvent',event);
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}

const ss = new SocketService();
ss.initSocket();
ss.send({id: 123, email: 'sfd', password_hash: 'sdf'});
