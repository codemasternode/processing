import { ACWebSocketHandler, IWebSocketMessage } from '../../../types'

export class DeleteProjectHandler extends ACWebSocketHandler<string> {

    static TYPE = 'delete-project'

    constructor() {
        super()
    }

    handle(message: IWebSocketMessage<string>): void {
        console.log("Delete Project Handler")
    }

}