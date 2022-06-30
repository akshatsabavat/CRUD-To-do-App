const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Hey there" });
});

module.exports = router;
