import React, { PropTypes } from 'react'

import RecipeComponentDetailed from './RecipeComponentDetailed'
import TagList from './TagList'
import LearningPathList from './LearningPathList'
import IngredientList from './IngredientList'
import StepList from './StepList'
import EquipmentList from './EquipmentList'
import SkillsLearntList from './SkillsLearntList'

//props.recipe.name ..
function Recipe ({ recipe }) {
  console.log('WHHHHHHHH', recipe);
  return (
    <section className='section-recipe-details grid container'>
      <RecipeComponentDetailed {...recipe}/>
      <section className='recipe-details'>
        <section className= 'basic-recipe-information'>
          <TagList {...recipe}/>
          <LearningPathList {...recipe}/>
          <p>Course Type: {recipe.courseType}</p>
          <p>Length: {recipe.length} minutes</p>
          <p>Difficulty: {recipe.difficulty}</p>
          <p>Servings: {recipe.servings} people</p>
          <p>Price: {recipe.price} euros</p>
        </section>
        <section className='recipe-material'>
          <EquipmentList {...recipe}/>
          <IngredientList {...recipe}/>
        </section>
        <section className='steps'>
          <StepList {...recipe}/>
        </section>
        <section className='skills-learnt'>
          <SkillsLearntList {...recipe}/>
        </section>
      </section>
    </section>
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
