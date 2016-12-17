import React from 'react'
const PropTypes = React.PropTypes
import RecipeOverview from './RecipeOverview'

function RecipeList (props) {
  return (
    <div className='container subsection-recipes'>
        {props.recipes
          .map((recipe) => {
            return (
              <RecipeOverview {...recipe} key={recipe._id} />
            )
          })}
    </div>
  )
}
RecipeList.propTypes = {
  recipes:PropTypes.array.isRequired
}

module.exports = RecipeList
