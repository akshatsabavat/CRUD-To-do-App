const express = require("express");
const router = express.Router();
var taskController = require("../controllers/tasksController");

//all routes
router.post("/", taskController.addTask);
router.get("/", taskController.getAllTasks);
router.delete("/", taskController.deletetask);
router.patch("/completed", taskController.taskComplete);
router.patch("/undone", taskController.taskUndone);
//for testing
router.get("/test", taskController.findTask);

module.exports = router;
