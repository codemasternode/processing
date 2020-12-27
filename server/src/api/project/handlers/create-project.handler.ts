import { ACWebSocketHandler, IWebSocketMessage, IProject, WebSocketError } from '../../../types'
import { ProjectModel } from '../../../models'
import { Error } from 'mongoose'

export class CreateProjectHandler extends ACWebSocketHandler<IProject> {

    static TYPE = 'create-project'

    constructor() {
        super()
    }

    async handle(message: IWebSocketMessage<IProject>): Promise<void> {
        console.log("Create Project Handler")
        try {
            const createdProject = await ProjectModel.create(message.payload)

            message.socket.emit("project", {
                type: "create-project",
                payload: createdProject
            })
        } catch (err) {
            if (err instanceof Error.ValidationError) {
                const errors = Object.keys(err.errors).map((field) => {
                    return {
                        [field]: err.errors[field].message
                    }
                })
                throw new WebSocketError(400, "create-project", errors)
            }
            throw new WebSocketError(500, "create-project", {
                message: err.toString()
            })
        }
    }

}