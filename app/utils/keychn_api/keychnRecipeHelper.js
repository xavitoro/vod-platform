import axios from 'axios'

function getRecipeInfo (recipeId) {
  return axios.get('https://api.keychn.com/recipes/' + recipeId); // it returns an object containing a recipe with the detailed information
}

var helpers = {
  getRecipe: function () {
    return getRecipeInfo ()
    .then(function (info) {
      return info.map(function (recipe) {
        return recipe.data // to be modified, depending on the properties of the object returned
      })
    })
    .catch(function (err) {console.warn('Error in getRecipe: ', err)})
  }
}

module.exports = helpers
