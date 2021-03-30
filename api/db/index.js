// this is the one and only file that interacts with my postgres database.
// it's good practice to seperate these files into a database folder to centralise all
// db communication and make fixing/upgrading easier later on

import pg from "pg";
import { postgresCredentials } from "./credentials.js";

const pool = new pg.Pool(postgresCredentials);

export const query = (text, params) => pool.query(text, params);

// shutdown is called by jest tests after running. if not, they wouldn't close and it would hang indefinitely
export const shutdown = () => pool.end();
