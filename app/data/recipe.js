import {setIngredients} from './ingredients'
import {setTags} from './tags'
import {setLearningPaths} from './learningPaths'
import {setCategories} from './categories'
import {setAuthors} from './authors'
import {setEquipment} from './equipment'
import {setSkillsLearnt} from './skillsLearnt'
import { SubmissionError } from 'redux-form';

export function fetchRecipeInfo() {
  return function(dispatch) {
    return fetch('/api/recipe-info')
      .then((res) => res.json())
      .then((data) => {
        const {categories, tags, learningPaths, ingredients, authors, equipment, skillsLearnt} = data
        categories && dispatch(setCategories(categories))
        tags && dispatch(setTags(tags))
        learningPaths && dispatch(setLearningPaths(learningPaths))
        ingredients && dispatch(setIngredients(ingredients))
        authors && dispatch(setAuthors(authors))
        equipment && dispatch(setEquipment(equipment))
        skillsLearnt && dispatch(setSkillsLearnt(skillsLearnt))
      })
  }
}

export function createRecipe(data) {
  return function (dispatch) {
    return fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status !== 200) {
        throw new SubmissionError({})
      }
    })
  }
}
