import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import RecipeList from '../components/RecipeList'
import Recipe from '../components/Recipe'
import preload from '../../public/dataRecipe.json'
import RecipeListContainer from '../containers/RecipeListContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={(props) => <RecipeList recipes={preload.recipes} {...props} />}/>
      {/* <IndexRoute component={RecipeListContainer}/> // once the API is properly connected */}
    </Route>
    <Route path='/recipe-details/:id' component={Main}>
      <IndexRoute component={(props) => {
              const recipe = preload.recipes.filter((recipe) => props.params.id === recipe._id)
              return <Recipe recipe={recipe[0]} {...props} /> }}
      />
    </Route>
    {/* <Route path='/recipe-details/:id' component={RecipeContainer}></Route> //once the API is properly connected  */}
  </Router>
)

module.exports = routes
