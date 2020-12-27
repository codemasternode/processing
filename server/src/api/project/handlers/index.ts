import { WebSocketHandler } from "../../../services";
import { CreateProjectHandler } from './create-project.handler'
import { DeleteProjectHandler } from './delete-project-handler'
import { ReadProjectHandler } from './read-project.handler'
//import { UpdateProjectHandler } from './update-project.handler'

const handler = new WebSocketHandler({
    [CreateProjectHandler.TYPE]: new CreateProjectHandler(),
    [DeleteProjectHandler.TYPE]: new DeleteProjectHandler(),
    [ReadProjectHandler.TYPE]: new ReadProjectHandler(),
    // [UpdateProjectHandler.TYPE]: new UpdateProjectHandler()
})

export { handler as projectWebSocketHandlers }