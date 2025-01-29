import express, { Express } from "express";
import cors from "cors";
import taskRoutes from "./routes/task";

const app: Express = express();
const port: number = 3004;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/task", taskRoutes);

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
