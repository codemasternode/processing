import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from '../api/auth'
import { CommonError } from '../types'
import { errorHandler } from '../api/shared'



export default (app: express.Application): express.Application => {

    const whitelist = ['http://localhost:3000'];
    const corsOptions = {
        credentials: true, // This is important.
        origin: (origin: string, callback: Function) => {
            if (whitelist.includes(origin))
                return callback(null, true)

            callback(new Error('Not allowed by CORS'));
        },
        allowedHeaders: ["Content-Type", "Authorization"]
    }

    app.use(cors(corsOptions as cors.CorsOptions))
    app.use(cookieParser())
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    app.use("/api/auth", authRoutes())

    app.use((err: CommonError, req: Request, res: Response, next: NextFunction) => {
        errorHandler(err, res)
    })

    return app
}