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

module.exports = router;
