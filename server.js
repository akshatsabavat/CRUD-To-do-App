require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const tasksRoute = require("./routes/tasks");
const app = express();
const port = 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connection to database successfull"));

app.use(bodyParser.json());
app.use("/tasks", tasksRoute);
app.listen(port, () => {
  console.log(`Server now live on: ${port}`);
});
