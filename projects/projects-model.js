const db = require("../data/db-config");

module.exports = {
  get,
  insertP
};

function get() {
  return db("projects");
}

function insertP(project) {
  return db("projects").insert(project);
}
