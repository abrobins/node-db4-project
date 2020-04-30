exports.seed = async function(knex) {
  await knex("quantities").truncate();
  await knex("ingredients").truncate();
  await knex("directions").truncate();
  await knex("recipes").truncate();
};
