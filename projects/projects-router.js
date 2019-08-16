const express = require("express");

const projectsDb = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  projectsDb
    .get()
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => {
      res.status(500).json({ error: "Server internal failure error" });
    });
});

router.post("/", (req, res) => {
  projectsDb
    .insertP(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "status five hundo" });
    });
});

module.exports = router;
