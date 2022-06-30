const express = require("express");
var taskController = require("../controllers/tasksController");
const router = express.Router();

//all routes
router.post("/", taskController.addTask);
router.get("/", taskController.getAllTasks);
router.delete("/", taskController.deletetask);
router.patch("/completed", taskController.taskComplete);
router.patch("/undone", taskController.taskUndone);

module.exports = router;
