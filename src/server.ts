// ------------------ API avec Classes Simples ------------------

import express, { Request, Response } from "express";
import cors from "cors";
const taskRoutes = require("./routes/task");

const app = express();
const port = 3004;

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
