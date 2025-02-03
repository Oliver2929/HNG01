import express, { Application } from "express";
import cors from "cors";
import numberRoutes from "./routes/numberRoutes";

const app: Application = express();

// Enable CORS
app.use(cors());

// Use the number classification routes
app.use(numberRoutes);

export default app;
