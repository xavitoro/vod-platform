var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/recipes', require('./recipe/recipeRoutes'));
router.use('/users', require('./user/userRoutes'));


router.get('/recipe-info', function (req, res) {
  res.json({
    ingredients: [{id: 1, name: 'tomato'}, {id: 2, name: 'onion'}]
  })
})

module.exports = router;
