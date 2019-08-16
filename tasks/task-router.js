const express = require("express");

const taskDb = require("./task-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  taskDb
    .get()
    .then(task => {
      res.status(200).json({ message: "test" });
    })
    .catch(err => {
      res.status(500).json({ error: "Server internal failure error" });
    });
});

module.exports = router;
