const express = require("express");

const Recipes = require("./scheme-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get shopping list." });
    });
});

module.exports = router;
