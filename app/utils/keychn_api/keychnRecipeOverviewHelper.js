import axios from 'axios'

function getRecipeOverviewInfo () {
  return axios.get('https://api.keychn.com/recipes-overview/'); // it returns an object containing an array of recipes with the overview information
}

var helpers = {
  getRecipeList: function () {
    return getRecipeOverviewInfo ()
    .then(function (info) {
      return info.map(function (recipe) {
        return recipe.data // to be modified, depending on the properties of the object returned
      })
    })
    .catch(function (err) {console.warn('Error in getRecipeList: ', err)})
  }
}

module.exports = helpers
