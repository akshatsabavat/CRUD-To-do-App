const Task = require("../models/taskModels");

//function to GET tasks
exports.getAllTasks = async function (req, res) {
  try {
    const tasks = await Task.find();
    if (tasks == "") {
      //check case incase user deletes all tasks
      res.send({ message: "no tasks as of now" });
    } else {
      res.send(tasks);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//function to ADD task
exports.addTask = async function (req, res) {
  const taskName = req.body.taskName;
  const taskState = req.body.taskState;

  const task = new Task({
    taskName,
    taskState,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//function to DELETE TASK
exports.deletetask = async function (req, res) {
  const id = req.body.id;
  try {
    const taskTBD = await Task.findById(id);
    taskTBD.remove();
    res.send({ message: "task removed" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
