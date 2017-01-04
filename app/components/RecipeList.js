import React from 'react'
const PropTypes = React.PropTypes
import RecipeOverview from './RecipeOverview'

function RecipeList (props) {
  return (
    <div className="container subsection-recipes">
      <div className="row">
        {props.recipes
          .map((recipe) => {
            return (
              <RecipeOverview {...recipe} key={recipe.id} />
            )
          })}
          </div>
        </div>
  )
}
RecipeList.propTypes = {
  recipes:PropTypes.array.isRequired
}

module.exports = RecipeList
