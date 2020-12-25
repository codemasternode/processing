import { Server } from 'socket.io'

export default (io: Server) => {
    console.log(io)
    io.on("connection", () => {
        console.log("Working")
    })
    io.on("/xd", (socket) => {
        socket.emit("XD")
    })
}