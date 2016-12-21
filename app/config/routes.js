import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import RecipeList from '../components/RecipeList'
import Recipe from '../components/Recipe'
import Terms from '../components/Terms'
import PrivacyPolicy from '../components/PrivacyPolicy'
import preload from '../../public/dataRecipe.json'
import RecipeListContainer from '../containers/RecipeListContainer'
import RecipeCreate from '../components/RecipeCreate'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={(props) => <RecipeList recipes={preload.recipes} {...props} />}/>
      {/* <IndexRoute component={RecipeListContainer}/> // once the API is properly connected */}
      <Route path='recipe-details/:id'>
        <IndexRoute component={(props) => {
          const recipe = preload.recipes.filter((recipe) => props.params.id === recipe._id)
          return <Recipe recipe={recipe[0]} {...props} /> }}
        />
      </Route>
      {/* <Route path='/recipe-details/:id' component={RecipeContainer}></Route> //once the API is properly connected  */}
      <Route path='/recipe/create' component={RecipeCreate} />
      <Route path='terms' component={Terms} />
      <Route path='privacy-policy' component={PrivacyPolicy} />
    </Route>
  </Router>
)

module.exports = routes
