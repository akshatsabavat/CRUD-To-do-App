const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  taskState: {
    type: Boolean,
    default: false, //false state signifies task is incomplete
  },
});

module.exports = mongoose.model("Tasks", taskSchema);
