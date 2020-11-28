import express from 'express'
import expressApp from './express'

export default async (): Promise<express.Application> => {
    const app = express();
    await expressApp({ app })
    console.log("Express App Initialized")

    return app
}