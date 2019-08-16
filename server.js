const express = require("express");

const projectsRouter = require("./projects/projects-router.js");
// const resourcesDb = require("./resources/resources-model.js");
// const taskDb = require("./tasks/task-model.js");

const server = express();

server.use(express.json());

server.use("/projects", projectsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "its working" });
});

module.exports = server;
