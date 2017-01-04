import React from 'react'
const PropTypes = React.PropTypes
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
      <div className="container subsection-recipes">
        <div className="row">
          {this.props.recipes
            .map((recipe) => {
              return (
                <RecipeOverview {...recipe} key={recipe.id} />
              )
            })}
        </div>
      </div>
    )
  }
}
RecipeList.propTypes = {
  recipes:PropTypes.array.isRequired
}
