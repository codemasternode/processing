import express from 'express'
import expressApp from './express'
import mongo from './mongo'

export default async (): Promise<express.Application> => {

    await mongo()
    console.log("Mongo Database Initialized")

    const app = express();
    await expressApp({ app })
    console.log("Express App Initialized")


    return app
}