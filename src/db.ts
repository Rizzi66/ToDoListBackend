import { Pool, QueryResult } from "pg";
const dotenv = require("dotenv").config().parsed;

const pool = new Pool({
  user: dotenv.DB_USER,
  host: dotenv.DB_HOST,
  database: dotenv.DB_DATABASE,
  password: dotenv.DB_PASSWORD,
  port: dotenv.DB_PORT,
});

export const query = (text: string, params?: any[]): Promise<QueryResult> => {
  return pool.query(text, params);
};
