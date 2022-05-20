import knex from "knex";
import dotenv from "dotenv";

dotenv.config({
    path: ".env",
});

const connectionDataBase = { ...process.env.DATABASE_URL, ssl: true };

const database = knex({
    client: "pg",
    connection: connectionDataBase || {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
});

export default database;
