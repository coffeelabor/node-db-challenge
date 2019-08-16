const express = require("express");

const resourcesDb = require("./resources-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  resourcesDb
    .get()
    .then(resc => {
      res.status(200).json(resc);
    })
    .catch(err => {
      res.status(500).json({ error: "Server internal failure error" });
    });
});

router.post("/", (req, res) => {
  resourcesDb
    .insertR(req.body)
    .then(resc => {
      res.status(201).json(resc);
    })
    .catch(err => {
      res.status(500).json({ error: "status five hundo" });
    });
});

module.exports = router;
