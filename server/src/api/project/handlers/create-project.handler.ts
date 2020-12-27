import { ACWebSocketHandler, IWebSocketMessage, IProject, InternalError, MongoDBValidationError } from '../../../types'
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
                throw new MongoDBValidationError(errors)
            } else if (err.name === 'MongoError' && err.code === 11000) {
                throw new MongoDBValidationError({
                    message: "Email has to be unique"
                })
            }
            throw new InternalError({
                message: err.toString()
            })
        }
    }

}