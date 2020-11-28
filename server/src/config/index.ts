import "dotenv/config";

export default {
    app: {
        env: process.env.APP_ENV
    },
    node: {
        PORT: process.env.NODE_PORT_INSIDE
    },
    postgres: {
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        port: process.env.POSTGRES_PORT_INSIDE
    }
}