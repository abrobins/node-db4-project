exports.seed = async function(knex) {
  await knex("directions").insert([
    {
      direction_number: "1",
      instructions: "Place cheese on bread",
      recipe_id: 1
    },
    {
      direction_number: "2",
      instructions: "Grill sandwich to your liking",
      recipe_id: 1
    },
    {
      direction_number: "1",
      instructions: "Place bananas on bagel",
      recipe_id: 2
    },
    {
      direction_number: "2",
      instructions: "Place peanut butter on bagel",
      recipe_id: 2
    },
    { direction_number: "2", instructions: "Enjoy! :)", recipe_id: 2 }
  ]);
};
