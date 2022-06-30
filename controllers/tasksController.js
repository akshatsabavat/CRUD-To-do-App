const Task = require("../models/taskModels");

//function to GET tasks
exports.getAllTasks = async function (req, res) {
  const tasks = await Task.find();
  try {
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
