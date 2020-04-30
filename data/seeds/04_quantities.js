exports.seed = async function(knex) {
  await knex("quantities").insert([
    { recipe_id: 1, ingredients_id: 1, quantity: 2 },
    { recipe_id: 1, ingredients_id: 2, quantity: 1 },
    { recipe_id: 2, ingredients_id: 3, quantity: 1 },
    { recipe_id: 2, ingredients_id: 4, quantity: 1 },
    { recipe_id: 2, ingredients_id: 5, quantity: 2 }
  ]);
};
