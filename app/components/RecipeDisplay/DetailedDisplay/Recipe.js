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
          <div class='course-type'>
            <h5>Course Type: </h5>
            <p>{recipe.courseType}</p>
          </div>
          <div class='length'>
            <h5>Estimated time: </h5>
            <p>{recipe.length} minutes</p>
          </div>
          <div class='difficulty'>
            <h5>Difficulty: </h5>
            <p>{recipe.difficulty}</p>
          </div>
          <div class='servings'>
            <h5>Servings: </h5>
            <p>{recipe.servings} people</p>
          </div>
          <div class='price'>
            <h5>Price: </h5>
            <p>{recipe.price} €</p>
          </div>
        </section>
        <section className='recipe-material'>
          <EquipmentList {...recipe}/>
          <IngredientList {...recipe}/>
        </section>
        <StepList {...recipe}/>
        <SkillsLearntList {...recipe}/>
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
