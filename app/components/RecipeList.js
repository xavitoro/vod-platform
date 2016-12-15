import React from 'react'
const PropTypes = React.PropTypes
import RecipeOverview from './RecipeOverview'

function RecipeList (props) {
  return (
    <div className='recipe-catalog'>
      <div className= 'container'>
        {props.recipes
          .map((recipe) => {
            return (
              <RecipeOverview {...recipe} key={recipe._id} />
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
