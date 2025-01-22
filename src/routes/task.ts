const express = require("express");
const taskCtrl = require("../controllers/task");

const router = express.Router();

router.get("/", taskCtrl.getAllTasks);
router.get("/:id", taskCtrl.getTask);
router.get("/status/:status", taskCtrl.getTaskByStatus);
router.post("/", taskCtrl.createTask);
router.put("/:id", taskCtrl.modifyTask);
router.delete("/:id", taskCtrl.deleteTask);

module.exports = router;
