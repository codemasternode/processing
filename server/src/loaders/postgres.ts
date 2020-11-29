import { Pool } from 'pg'
import config from '../config'
import fs from 'fs'
import path from 'path'

const { postgres: { database, username, password, port } } = config

export default async (): Promise<Pool> => {
    if (!database || !username || !password || !port) {
        throw new Error(`Missing postgres enviroment variables`)
    }
    const pool = new Pool({
        user: username,
        host: 'postgres',
        database,
        password,
        port: Number(port)
    });

    const projectSQL = fs.readFileSync(path.join(__dirname, "../model/project.sql"))
    const endpointSQL = fs.readFileSync(path.join(__dirname, "../model/endoint.sql"))



    return pool
}