exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      description: "a description of the task1 for each project",
      notes: "notes on the task",
      completed: 0,
      project_id: 1
    },
    {
      description: "a description of the task1 for each project",
      notes: "notes on the task",
      completed: 0,
      project_id: 1
    },
    {
      description: "a description of the task2 for each project",
      notes: "notes on the task",
      completed: 0,
      project_id: 2
    },
    {
      description: "a description of the task2 for each project",
      notes: "notes on the task",
      completed: 0,
      project_id: 2
    },
    {
      description: "a description of the task3 for each project",
      notes: "notes on the task",
      completed: 0,
      project_id: 3
    },
    {
      description: "a description of the task3 for each project",
      notes: "notes on the task",
      completed: 0,
      project_id: 3
    }
  ]);
};
