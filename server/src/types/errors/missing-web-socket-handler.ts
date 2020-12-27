import { IWebSocketMessage } from "../shared";

export class MissingWebSocketHandler extends Error {

    code: number;

    constructor(message: IWebSocketMessage<unknown>) {
        super('Server doesn t have web socket handler for this type of message: ' + message.type)
        this.code = 500
    }
}