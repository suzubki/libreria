import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const database = knex({
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
});

export default database;
