const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  taskState: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Tasks", taskSchema);
