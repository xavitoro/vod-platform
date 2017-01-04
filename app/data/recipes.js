
const SET_RECIPES = 'SET_RECIPES'

export function setRecipes(recipes) {
  return {type: SET_RECIPES, payload: {recipes}}
}

export function fetchRecipes() {
  return function (dispatch) {
    return fetch('/api/recipes')
      .then((res) => res.json())
      .then(recipes => {
        console.log(recipes, 'rec')
        dispatch(setRecipes(recipes))
      })
  }
}

export default function recipes(state = [], action) {
  const {type, payload} = action
  switch(type) {
    case SET_RECIPES: return payload.recipes
    default: return state
  }
}
