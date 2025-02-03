import express, { Application } from "express";
import cors from "cors";
import numberRoutes from "./routes/numberRoutes";

const app: Application = express();

app.use(cors());

app.use(numberRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

export default app;
