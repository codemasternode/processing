import { ACWebSocketHandler, IWebSocketMessage, MissingWebSocketHandler } from "../../types";

export class WebSocketHandler {
    handlers: { [key: string]: ACWebSocketHandler<unknown>; };

    constructor(handlers: { [key: string]: ACWebSocketHandler<unknown> }) {
        this.handlers = handlers
    }

    handle(message: IWebSocketMessage<unknown>) {
        if (!message.type || !this.handlers[message.type]) {
            throw new MissingWebSocketHandler(message)
        }
        this.handlers[message.type].handle(message)
    }

}