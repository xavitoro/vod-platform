import React from 'react'
import RecipeListFromAPI from '../components/RecipeListFromAPI'
import keychnRecipeOverviewHelper from '../utils/keychn_api/keychnRecipeOverviewHelper'

var RecipeListContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      recipeList: [],
    }
  },
  componentDidMount: function () {
    keychnRecipeOverviewHelper.getRecipeList()
      .then(function (recipes) { // Assumption: the object return is an ARRAY
        this.setState({
          isLoading: false,
          recipeList: recipes
        })
      }.bind(this))
  },
  render: function () {
    return (
      <RecipeListFromAPI
        isLoading={this.state.isLoading}
        recipeList={this.state.recipeList} />
    )
  }
})

module.exports = RecipeListContainer;
