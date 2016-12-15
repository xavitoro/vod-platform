import React from 'react'
const PropTypes = React.PropTypes
import { Link } from 'react-router'
import Moment from 'react-moment'
import RecipeComponent from './RecipeComponent'
// const Moment = require('react-moment').default
// console.log(Link, Moment, 'import')

function RecipeOverview (props) {
  return (
    <Link to={`/recipe-details/${props._id}`}>
      <RecipeComponent {...props}/>
      <button>READ MORE</button>
    </Link>
  )
}
module.exports = RecipeOverview
