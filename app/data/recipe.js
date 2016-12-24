import {setIngredients} from './ingredients'
import {setTags} from './tags'
import {setLearningPaths} from './learningPaths'

export function fetchRecipeInfo() {
  return function(dispatch) {
    return fetch('/api/recipe-info')
      .then((res) => res.json())
      .then((data) => {
        const {ingredients, tags, learningPaths} = data
        ingredients && dispatch(setIngredients(ingredients))
        tags && dispatch(setTags(tags))
        learningPaths && dispatch(setLearningPaths(learningPaths))
      })
  }
}