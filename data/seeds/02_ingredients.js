exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { name: "Bread" },
    { name: "Cheese" },
    { name: "Peanut Butter" },
    { name: "Banana" },
    { name: "Bagel" }
  ]);
};
