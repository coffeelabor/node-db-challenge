const express = require("express");

const resourcesDb = require("./resources-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  resourcesDb
    .get()
    .then(resc => {
      res.status(200).json({ message: "test" });
    })
    .catch(err => {
      res.status(500).json({ error: "Server internal failure error" });
    });
});

module.exports = router;
