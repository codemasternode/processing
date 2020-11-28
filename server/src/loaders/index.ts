import express from 'express'
import expressApp from './express'
import postgres from './postgres'

export default async (): Promise<express.Application> => {

    await postgres()
    console.log("Postgres Database Initialized")

    const app = express();
    await expressApp({ app })
    console.log("Express App Initialized")

    return app
}