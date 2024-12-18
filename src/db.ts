import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tasks",
  password: "root123",
  port: 5432,
});

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};
