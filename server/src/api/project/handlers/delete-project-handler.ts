import { ACWebSocketHandler, IWebSocketMessage, WebSocketError } from '../../../types'
import { ProjectModel } from '../../../models'

export class DeleteProjectHandler extends ACWebSocketHandler<string> {

    static TYPE = 'delete-project'

    constructor() {
        super()
    }

    async handle(message: IWebSocketMessage<string>): Promise<void> {
        console.log("Delete Project Handler")
        try {
            const result = await ProjectModel.deleteOne({
                _id: message.payload
            })
            if (result.deleteCount === 0) {
                throw new WebSocketError(400, "delete-project", {
                    message: "Nothing to remove"
                })
            }
            message.socket.emit("delete-project", {
                code: 200,
                payload: {
                    message: "Deleted"
                }
            })
        } catch (err) {
            if (err instanceof WebSocketError) {
                throw err
            }
            throw new WebSocketError(500, "delete-project", {
                message: err.toString()
            })
        }

    }

}