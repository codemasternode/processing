// import config from '../config'
import mongoose, { Mongoose } from 'mongoose'

// const { postgres: { database, username, password, port } } = config

export default async (): Promise<Mongoose> => {
    // if (!database || !username || !password || !port) {
    //     throw new Error(`Missing postgres enviroment variables`)
    // }
    try {
        const connection = await mongoose.connect("mongodb://mongo:27017/processing", { useNewUrlParser: true })
        return connection
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }


}