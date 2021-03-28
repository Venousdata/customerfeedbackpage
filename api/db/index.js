import pg from "pg";
import { postgresCredentials } from "./credentials.js";

const pool = new pg.Pool(postgresCredentials);

export const query = (text, params) => pool.query(text, params);
export const close = () => pool.end();
