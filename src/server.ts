// ------------------ API avec Classes Simples ------------------

import express, { Request, Response } from "express";
const taskRoutes = require("./routes/task");

const app = express();
const port = 3004;

app.use(express.json());

app.use("/task", taskRoutes);

app.listen(port, () => {
  console.log(
    `Serveur avec Classes Simples en cours d'exécution sur le port ${port}`
  );
});
