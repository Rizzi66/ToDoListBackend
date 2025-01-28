import { Request, Response } from "express";
import Task from "../class/task";
import { query } from "../db";

exports.getAllTasks = async (req: Request, res: Response) => {
  try {
    const queryText = "SELECT * FROM tasks";
    const result = await query(queryText);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

exports.getTaskByStatus = async (req: Request, res: Response) => {
  try {
    const taskStatus = req.params.status;
    const queryText = `SELECT * FROM tasks WHERE statut='${taskStatus}'`;
    const result = await query(queryText);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

exports.getTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const queryText = `SELECT * FROM tasks WHERE id=${taskId}`;
    const result = await query(queryText);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

exports.createTask = async (req: Request, res: Response) => {
  try {
    const { titre, description, date_expiration, statut } = req.body;
    const task = new Task(titre, description, date_expiration, statut);

    const queryText =
      "INSERT INTO tasks (titre, description, statut, date_creation, date_expiration) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const params = [
      titre,
      description,
      statut,
      task.dateCreation,
      date_expiration,
    ];
    const result = await query(queryText, params);

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

exports.modifyTask = async (req: Request, res: Response) => {
  try {
    const { titre, description, date_expiration, statut } = req.body;
    const taskId = req.params.id;

    const queryText =
      "UPDATE tasks SET titre = $1, description = $2, date_expiration = $3, statut = $4 WHERE id = $5 RETURNING *";
    const params = [titre, description, date_expiration, statut, taskId];
    const result = await query(queryText, params);

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

exports.deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const queryText = "DELETE FROM tasks WHERE id = $1 RETURNING *";
    const params = [taskId];
    const result = await query(queryText, params);

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};
