import express, { Router } from "express";
import * as taskCtrl from "../controllers/task";

const router: Router = express.Router();

router.get("/", taskCtrl.getAllTasks);
router.get("/:id", taskCtrl.getTask);
router.get("/status/:status", taskCtrl.getTaskByStatus);
router.post("/", taskCtrl.createTask);
router.put("/:id", taskCtrl.modifyTask);
router.delete("/:id", taskCtrl.deleteTask);

export default router;
