import { Sequelize } from 'sequelize'
import config from '../config'

const { postgres: { database, username, password, port } } = config

export default async (): Promise<Sequelize> => {
    if (!database || !username || !password || !port) {
        throw new Error(`Missing postgres enviroment variables`)
    }
    const sequelize = new Sequelize({
        dialect: 'postgres',
        port: Number(port),
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        host: 'postgres',
        username,
        password,
        database
    });

    try {
        await sequelize.authenticate()
    } catch (err) {
        throw err
    }

    return sequelize
}