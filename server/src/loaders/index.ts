import express from 'express'
import expressLoader from './express'
import mongoLoader from './mongo'
import webSockets from './web-sockets'
import http from 'http'
import { Server, Socket } from "socket.io";

export default async (): Promise<http.Server> => {

    await mongoLoader()

    const app = express()
    expressLoader(app)

    const httpServer = http.createServer(app)
    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:3000",
            allowedHeaders: "Content-Type, Authorization",
            credentials: true
        },
        cookie: false
    })

    webSockets(io)

    return httpServer
}