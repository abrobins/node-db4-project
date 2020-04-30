exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("id");
    table
      .text("recipe_name")
      .notNullable()
      .unique();
  });

  await knex.schema.createTable("directions", table => {
    table.increments("id");
    table
      .integer("direction_number")
      .unsigned()
      .notNullable();
    table.text("instructions");
    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table
      .text("name")
      .notNullable()
      .unique();
  });

  await knex.schema.createTable("quantities", table => {
    table.increments("id");
    table.float("quantity", 2).notNullable();
    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE");
    table
      .integer("ingredients_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onUpdate("CASCADE");
    table.unique(["recipe_id", "ingredients_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("quantities");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("directions");
  await knex.schema.dropTableIfExists("recipes");
};
