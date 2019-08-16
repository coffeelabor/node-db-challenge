const express = require("express");

const projectsRouter = require("./projects/projects-router.js");
const resourcesRouter = require("./resources/resources-router.js");
const taskRouter = require("./tasks/task-router.js");

const server = express();

server.use(express.json());

server.use("/projects", projectsRouter);
server.use("/resources", resourcesRouter);
server.use("/tasks", taskRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "its working" });
});

module.exports = server;
