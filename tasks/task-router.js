const express = require("express");

const taskDb = require("./task-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  taskDb
    .get()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ error: "Server internal failure error" });
    });
});

router.post("/", (req, res) => {
  taskDb
    .insertT(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ error: "status five hundo" });
    });
});

module.exports = router;
