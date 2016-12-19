import React from 'react'
import { Link } from 'react-router'
import RecipeComponent from './RecipeComponent'
import { StyleSheet, css } from 'aphrodite'

// const Moment = require('react-moment').default
// console.log(Link, Moment, 'import')

function RecipeOverview (props) {
  return (
    <div className={`grid-item col-md-6 bg-warning ${css(styles.recipeoverview)}`}>
      <RecipeComponent {...props}/>
      <Link to={`/recipe-details/${props._id}`} >
        <button>READ MORE</button>
      </Link>
    </div>
  )
}
module.exports = RecipeOverview

const styles = StyleSheet.create({
  recipeoverview: {
    outline: '1px solid black !important',
    marginTop: 10,
  },
})
