const db = require("../data/config");

module.exports = {
  getRecipes
};

function getRecipes() {
  return db("recipes");
}
