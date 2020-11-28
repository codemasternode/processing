import dotenv from 'dotenv';

dotenv.config();

export default {
    postgres: {
        db: process.env.POSTGRES_USER,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
    },
    node: {
        port: process.env.NODE_PORT,
    },
};
