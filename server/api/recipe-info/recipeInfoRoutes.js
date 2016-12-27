const recipeInfoRouter = require('express').Router();
const tagModel = require('../tag/tagModel');
const learningPathModel = require('../learningPath/learningPathModel');
const categoryModel = require('../category/categoryModel');
const ingredientModel = require('../ingredient/ingredientModel')
const chefModel = require('../chef/chefModel')
const equipmentModel = require('../equipment/equipmentModel')

recipeInfoRouter.get('/recipe-info', function (req, res) {
  Promise.all([
    categoryModel.find({}),
    tagModel.find({}),
    learningPathModel.find({}),
    ingredientModel.find({}),
    chefModel.find({}),
    equipmentModel.find({})
  ]).then(function (data) {
    const [categories, tags, learningPaths, ingredients, authors, equipment] = data
    res.json({
      categories,
      tags,
      learningPaths,
      ingredients,
      authors,
      equipment
    })
  })
})

module.exports = recipeInfoRouter