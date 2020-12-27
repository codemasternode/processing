class WebSocketError extends Error {

    code: number;
    type: string;
    payload: unknown;

    constructor(code: number, type: string, payload: unknown) {
        super()
        this.code = code
        this.type = type
        this.payload = payload
    }
}

export { WebSocketError }