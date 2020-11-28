import "dotenv/config";

const config = {
    app: {
        env: process.env.APP_ENV || 'development'
    },
    node: {
        PORT: process.env.NODE_PORT_INSIDE || "3000",
        hostname: process.env.NODE_HOSTNAME
    },
    postgres: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        port: process.env.POSTGRES_PORT_INSIDE,
        hostname: process.env.POSTGRES_HOSTNAME
    }
}

export default config