import { ACWebSocketHandler, IWebSocketMessage } from '../../../types'

export class ReadProjectHandler extends ACWebSocketHandler<undefined> {

    static TYPE = 'read-project'

    constructor() {
        super()
    }

    handle(message: IWebSocketMessage<undefined>): void {
        console.log("Read Project Handler")
    }

}