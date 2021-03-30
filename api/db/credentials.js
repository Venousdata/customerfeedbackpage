// good practice to "conceal" credentials where possible
// could encrypt further to be more secure, but due to
// the nature of this project it might be a bit overkill.
// instead, i've just seperated credentials from db/index.js

export const postgresCredentials = {
  user: "postgres",
  host: "localhost",
  database: "customerfeedbackpage",
  password: "password",
  port: 5432,
};
