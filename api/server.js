import express from "express";
import mountRoutes from "./routes/index.js";

const app = express();
// parse incoming json payloads
app.use(express.json());
mountRoutes(app);

// export app instead of listening to it here to allow for endpoint testing with supertest package
export default app;
