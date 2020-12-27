import { Socket } from "socket.io";

export interface IWebSocketMessage<T> {
    type: string;
    socket: Socket;
    payload: T;
    [key: string]: unknown;
}