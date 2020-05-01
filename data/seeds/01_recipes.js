exports.seed = async function(knex) {
  await knex("recipes").insert([
    { recipe_name: "Grilled Cheese Sandwich" },
    { recipe_name: "Banana & Peanut Butter Bagel" }
  ]);
};
