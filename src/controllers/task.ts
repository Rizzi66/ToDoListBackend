import { Request, Response } from "express";
import Task from "../class/task";
import { query } from "../db";
import { QueryResult, QueryResultRow } from "pg";

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const queryText: string = "SELECT * FROM tasks";
    const result: QueryResult = await query(queryText);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

export const getTaskByStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const taskStatus: string = req.params.status;
    const queryText: string = `SELECT * FROM tasks WHERE statut=$1`;
    const result: QueryResult = await query(queryText, [taskStatus]);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

export const getTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const taskId: string = req.params.id;
    const queryText: string = `SELECT * FROM tasks WHERE id=$1`;
    const result: QueryResult = await query(queryText, [taskId]);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { titre, description, date_expiration, statut } = req.body;
    const task = new Task(titre, description, date_expiration, statut);

    const queryText: string =
      "INSERT INTO tasks (titre, description, statut, date_creation, date_expiration) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const params: any[] = [titre, description, statut, task.dateCreation, date_expiration];
    const result: QueryResult = await query(queryText, params);

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

export const modifyTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { titre, description, date_expiration, statut } = req.body;
    const taskId: string = req.params.id;

    const queryText: string =
      "UPDATE tasks SET titre = $1, description = $2, date_expiration = $3, statut = $4 WHERE id = $5 RETURNING *";
    const params: any[] = [titre, description, date_expiration, statut, taskId];
    const result: QueryResult = await query(queryText, params);

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const taskId: string = req.params.id;
    const queryText: string = "DELETE FROM tasks WHERE id = $1 RETURNING *";
    const result: QueryResult = await query(queryText, [taskId]);

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};
