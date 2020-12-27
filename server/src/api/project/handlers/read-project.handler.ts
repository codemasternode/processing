import { ACWebSocketHandler, IWebSocketMessage } from '../../../types'
import { ComapnyModel } from '../../../models'

export class ReadProjectHandler extends ACWebSocketHandler<undefined> {

    static TYPE = 'read-project'

    constructor() {
        super()
    }

    async handle(message: IWebSocketMessage<undefined>): Promise<void> {
        console.log("Read Project Handler")

        const company = await ComapnyModel.find({
            companyName: message.payload
        })
        message.socket.emit("read-project", {
            code: 200,
            payload: company
        })
    }

}