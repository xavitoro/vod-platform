import {setIngredients} from './ingredients'

export function fetchRecipeInfo() {
  return function(dispatch) {
    return fetch('/api/recipe-info')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setIngredients(data.ingredients))
      })
  }
}