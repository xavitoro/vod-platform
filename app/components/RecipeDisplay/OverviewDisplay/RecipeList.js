import React, { PropTypes } from 'react'

import RecipeOverview from './RecipeOverview'
import {fetchRecipes} from '../../../data/recipes'
import {connect} from 'react-redux'

@connect((state) => {
  return {
    newRecipes: state.recipes
  }
})
export default class RecipeList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipes())
  }
  render() {
    console.log(this.props.newRecipes)
    return (
      <div className="container grid subsection-recipes">
        {this.props.recipes
          .map((recipe) => {
            return (
              <RecipeOverview {...recipe} key={recipe.id} />
            )
          })}
      </div>
    )
  }
}
RecipeList.propTypes = {
  recipes:PropTypes.array.isRequired
}
