import express, { Express } from "express";
import cors from "cors";
import taskRoutes from "./routes/task";
const dotenv = require("dotenv").config().parsed;

const app: Express = express();
const port: number = dotenv.BACK_END_PORT | 3000;

app.use(
  cors({
    origin: dotenv.FRONT_END_URL,
  })
);

app.use(express.json());

app.use("/task", taskRoutes);

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
