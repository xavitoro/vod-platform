const React = require('react')
const PropTypes = React.PropTypes
const { Link } = require('react-router')
import Moment from 'react-moment'
import RecipeComponent from './RecipeComponent'
// const Moment = require('react-moment').default
console.log(Link, Moment, 'import')

function RecipeOverview (props) {
  return (
    <Link to={`/recipe-details/${props._id}`}>
      <RecipeComponent {...props}/>
    </Link>
  )
}
module.exports = RecipeOverview
