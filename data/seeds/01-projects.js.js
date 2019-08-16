exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "project 1",
      description: "This is the description for project 1",
      completed: 0
    },
    {
      project_name: "project 2",
      description: "This is the description for project 2",
      completed: 0
    },
    {
      project_name: "project 3",
      description: "This is the description for project 3",
      completed: 0
    }
  ]);
};
