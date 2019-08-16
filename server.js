const express = require("express");

// const projectsDb = require("./projects/projects-model.js");
// const resourcesDb = require("./resources/resources-model.js");
// const taskDb = require("./tasks/task-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "its working" });
});

module.exports = server;
