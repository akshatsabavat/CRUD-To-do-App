const express = require("express");
var taskController = require("../controllers/tasksController");
const router = express.Router();

//all routes
router.get("/", taskController.getAllTasks);

module.exports = router;
