const db = require("../data/db-config");

module.exports = {
  get,
  insertT
};

function get() {
  return db("tasks");
}

function insertT(tasks) {
  return db("tasks").insert(tasks);
}
