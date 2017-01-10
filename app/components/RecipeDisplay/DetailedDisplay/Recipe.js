import React from 'react'
const PropTypes = React.PropTypes
import RecipeComponentDetailed from './RecipeComponentDetailed'
import IngredientList from './IngredientList'
import StepList from './StepList'
import EquipmentList from './EquipmentList'
import SkillsLearntList from './SkillsLearntList'

//props.recipe.name ..
function Recipe (props) {
  // console.log(props);
  return (
    <div className='section-recipe-details'>
      <RecipeComponentDetailed {...props.recipe}/>
      <div className = 'basic-recipe-information'>
        <p>Tags: {props.recipe.tags.join(' | ')}</p>
        <p>Learning Path: {props.recipe.learningPath.join(' | ')}</p>
        <p>Course Type: {props.recipe.courseType}</p>
        <p>Length: {props.recipe.length} minutes</p>
        <p>Difficulty: {props.recipe.difficulty}</p>
        <p>Servings: {props.recipe.servings} people</p>
        <p>Price: {props.recipe.price} euros</p>
        <EquipmentList {...props.recipe}/>
        <IngredientList {...props.recipe}/>
        <StepList {...props.recipe}/>
        <SkillsLearntList {...props.recipe}/>
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
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    equipment: PropTypes.array.isRequired,
    skillsLearnt: PropTypes.array.isRequired,
  })
}
module.exports = Recipe
