const recipeInfoRouter = require('express').Router();
const tagModel = require('../tag/tagModel');

recipeInfoRouter.get('/recipe-info', function (req, res) {
  tagModel.find({}, function (err, tags) {
    console.log(tags, tags[0].id)
    res.json({
      ingredients: [{id: 1, name: 'tomato'}, {id: 2, name: 'onion'}],
      tags: tags
    })
  })
})

module.exports = recipeInfoRouter