const recipeInfoRouter = require('express').Router();
const tagModel = require('../tag/tagModel');
const learningPathModel = require('../learningPath/learningPathModel');
const categoryModel = require('../category/categoryModel');
const ingredientModel = require('../recipe/ingredientModel')

recipeInfoRouter.get('/recipe-info', function (req, res) {
  Promise.all([
    categoryModel.find({}),
    tagModel.find({}),
    learningPathModel.find({}),
    ingredientModel.find({})
  ]).then(function (data) {
    const [categories, tags, learningPaths, ingredients] = data
    res.json({
      categories,
      tags,
      learningPaths,
      ingredients
    })
  })
})

module.exports = recipeInfoRouter