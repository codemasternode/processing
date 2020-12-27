import { ACWebSocketHandler, IWebSocketMessage, MissingWebSocketHandler, WebSocketError } from "../../types";

export class WebSocketHandler {
    handlers: { [key: string]: ACWebSocketHandler<unknown>; };

    constructor(handlers: { [key: string]: ACWebSocketHandler<unknown> }) {
        this.handlers = handlers
    }

    handle(message: IWebSocketMessage<unknown>) {
        if (!message.type || !this.handlers[message.type]) {
            throw new MissingWebSocketHandler(message)
        }
        try {
            this.handlers[message.type].handle(message)
        } catch (err) {
            if (err instanceof WebSocketError) {
                message.socket.emit(err.message, {
                    code: err.code,
                    payload: err.payload
                })
            }
        }
    }

}