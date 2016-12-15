const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const hashHistory = ReactRouter.hashHistory
const IndexRoute = ReactRouter.IndexRoute
const Main = require('../components/Main')
const RecipeList = require('../components/RecipeList')
const Recipe = require('../components/Recipe')
const preload = require('../../public/dataRecipe.json')

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={(props) => <RecipeList recipes={preload.recipes} {...props} />}/>
    </Route>
    <Route path='/recipe-details/:id' component={Main}>
      <IndexRoute component={(props) => {
              const recipe = preload.recipes.filter((recipe) => props.params.id === recipe._id)
              return <Recipe recipe={recipe[0]} {...props} /> }}
      />
    </Route>
  </Router>
)

module.exports = routes
