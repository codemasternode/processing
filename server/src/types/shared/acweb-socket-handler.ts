import { IWebSocketMessage } from '../../types'

export abstract class ACWebSocketHandler<T> {
    static TYPE: string;
    abstract handle(message: IWebSocketMessage<T>): unknown;
}