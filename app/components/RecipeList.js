const React = require('react')
const PropTypes = React.PropTypes
const RecipeOverview = require('./RecipeOverview')

const { arrayOf } = React.PropTypes

function RecipeList (props) {
  return (
    <div className='recipe-catalog'>
      <div>
        {props.recipes
          .map((recipe) => {
            return (
              <RecipeOverview {...recipe} key={recipe._id} />
            )
          })}
      </div>
    </div>
  )
}
RecipeList.propTypes = {
  recipes:PropTypes.array.isRequired
}

module.exports = RecipeList
