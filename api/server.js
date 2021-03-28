import express from "express";
import mountRoutes from "./routes/index.js";

const app = express();
mountRoutes(app);

// seperate app setup to allow for endpoint testing with supertest package
export default app;