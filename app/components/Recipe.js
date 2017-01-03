import React from 'react'
const PropTypes = React.PropTypes
import RecipeComponent from './RecipeComponent'

//props.recipe.name ..
function Recipe (props) {
  // console.log(props);
  return (
    <div className='section-recipe-details'>
      <RecipeComponent {...props.recipe}/>
      <div className = 'basic-recipe-information'>
        <p>Tags: {props.recipe.tags.join(' | ')}</p>
        <p>Learning Path: {props.recipe.learningPath.join(' | ')}</p>
        <p>Course Type: {props.recipe.courseType}</p>
        <p>Length: {props.recipe.length} minutes</p>
        <p>Difficulty: {props.recipe.difficulty}</p>
        <p>Servings: {props.recipe.servings} people</p>
        <p>Price: {props.recipe.price} people</p>
      </div>

    </div>
  )
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    tags: PropTypes.array.isRequired,
    learningPath: PropTypes.array.isRequired,
    courseType: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    servings: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })
}
module.exports = Recipe
