const db = require("../data/db-config");

module.exports = {
  get,
  insertR
};

function get() {
  return db("resources");
}

function insertR(resources) {
  return db("resources").insert(resources);
}
