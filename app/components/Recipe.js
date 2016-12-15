const React = require('react')
const PropTypes = React.PropTypes
const Moment = require('react-moment')
import RecipeComponent from './RecipeComponent'

//props.recipe.name ..
function Recipe (props) {
  return (
    <div className='recipe-details'>
      <RecipeComponent {...props.recipe}/>

    </div>
  )
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    videoThumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired
    }),
    categories: PropTypes.array.isRequired,
  })
}
module.exports = Recipe
