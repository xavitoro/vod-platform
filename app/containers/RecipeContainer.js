import React from 'react'
import RecipeFromAPI from '../components/RecipeDisplay/RecipeFromAPI'
import keychnRecipeHelper from '../utils/keychn_api/keychnRecipeHelper'

var RecipeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      recipe: {},
    }
  },
  componentDidMount: function () {
    const clickedRecipe = this.props. // should get the _id from the recipe clicked.
    keychnRecipeHelper.getRecipe()
      .then(function (clickedRecipe) { // Assumption: the object return is an object
        this.setState({
          isLoading: false,
          recipe: recipe
        })
      }.bind(this))
  },
  render: function () {
    return (
      <RecipeFromAPI
        isLoading={this.state.isLoading}
        recipe={this.state.recipe} />
    )
  }
})

module.exports = RecipeContainer;
