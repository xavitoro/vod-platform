const recipeInfoRouter = require('express').Router();
const tagModel = require('../tag/tagModel');
const learningPathModel = require('../learningPath/learningPathModel');
const categoryModel = require('../category/categoryModel');
const ingredientModel = require('../ingredient/ingredientModel')
const chefModel = require('../chef/chefModel')

recipeInfoRouter.get('/recipe-info', function (req, res) {
  Promise.all([
    categoryModel.find({}),
    tagModel.find({}),
    learningPathModel.find({}),
    ingredientModel.find({}),
    chefModel.find({})
  ]).then(function (data) {
    const [categories, tags, learningPaths, ingredients, authors] = data
    res.json({
      categories,
      tags,
      learningPaths,
      ingredients,
      authors
    })
  })
})

module.exports = recipeInfoRouter