const recipeInfoRouter = require('express').Router();
const tagModel = require('../tag/tagModel');
const learningPathModel = require('../learningPath/learningPathModel');

recipeInfoRouter.get('/recipe-info', function (req, res) {
  Promise.all([
    tagModel.find({}),
    learningPathModel.find({})
  ]).then(function (data) {
    console.log(data[0])
    res.json({
      tags: data[0],
      learningPaths: data[1],
    })
  })
})

module.exports = recipeInfoRouter