import React, { PropTypes } from 'react'

import RecipeComponentDetailed from './RecipeComponentDetailed'
import IngredientList from './IngredientList'
import StepList from './StepList'
import EquipmentList from './EquipmentList'
import SkillsLearntList from './SkillsLearntList'

//props.recipe.name ..
function Recipe ({ recipe }) {
  // console.log(props);
  return (
    <div className='section-recipe-details'>
      <RecipeComponentDetailed {...recipe}/>
      <div className = 'basic-recipe-information'>
        <p>Tags: {recipe.tags.join(' | ')}</p>
        <p>Learning Path: {recipe.learningPath.join(' | ')}</p>
        <p>Course Type: {recipe.courseType}</p>
        <p>Length: {recipe.length} minutes</p>
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Servings: {recipe.servings} people</p>
        <p>Price: {recipe.price} euros</p>
        <EquipmentList {...recipe}/>
        <IngredientList {...recipe}/>
        <StepList {...recipe}/>
        <SkillsLearntList {...recipe}/>
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
export default Recipe
