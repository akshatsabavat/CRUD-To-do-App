const express = require("express");
const Tasks = require("../models/taskModels");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Tasks.find();
    if (tasks == "") {
      res.send({ message: "no tasks as of now" });
    } else {
      res.send(tasks);
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong with the server" });
  }
});

module.exports = router;
