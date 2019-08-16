exports.seed = function(knex, Promise) {
  return knex("resources").insert([
    {
      resource_name: "resource 1",
      description: "Here is a brief descripton for resource 1"
    },
    {
      resource_name: "resource 2",
      description: "Here is a brief descripton for resource 2"
    },
    {
      resource_name: "resource 3",
      description: "Here is a brief descripton for resource 3"
    },
    {
      resource_name: "resource 4",
      description: "Here is a brief descripton for resource 4"
    },
    {
      resource_name: "resource 5",
      description: "Here is a brief descripton for resource 5"
    }
  ]);
};
