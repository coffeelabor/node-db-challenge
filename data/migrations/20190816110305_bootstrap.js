exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .string("project_name", 255)
        .unique()
        .notNullable();
      tbl.string("description", 500);
      tbl.boolean("completed").notNullable();
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("resource_name", 255).notNullable();
      tbl.string("description", 500);
    })

    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description", 500).notNullable("notes", 255);
      tbl.string("notes", 255);
      tbl.boolean("completed").notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    })

    .createTable("project_resource", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
