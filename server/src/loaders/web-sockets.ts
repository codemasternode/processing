import { Server, Socket } from 'socket.io'
import { projectWebSocketHandlers } from '../api/project'


export default (io: Server) => {
    io.on("connection", (socket: Socket) => {
        socket.on("project", message => {
            projectWebSocketHandlers.handle({
                ...message,
                socket: socket
            })
        })
    })
}