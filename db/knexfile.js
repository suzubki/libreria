import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

let database;

if (process.env.NODE_ENV.trim() === "development") {
    database = knex({
        client: "pg",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: process.env.DB_PORT,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        },
    });
}

if (process.env.NODE_ENV.trim() === "production") {
    database = knex({
        client: "pg",
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        },
    });
}

export default database;
