import {setIngredients} from './ingredients'
import {setTags} from './tags'

export function fetchRecipeInfo() {
  return function(dispatch) {
    return fetch('/api/recipe-info')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setIngredients(data.ingredients))
        dispatch(setTags(data.tags))
      })
  }
}