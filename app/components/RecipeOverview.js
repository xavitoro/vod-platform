import React from 'react'
import { Link } from 'react-router'
import RecipeComponent from './RecipeComponent'
import { StyleSheet, css } from 'aphrodite'

// const Moment = require('react-moment').default
// console.log(Link, Moment, 'import')

function RecipeOverview (props) {
  return (
    <div className={`grid-item col-md-6 ${css(styles.recipeoverview)}`}>
      <RecipeComponent {...props}/>
      <Link to={`/recipe-details/${props.id}`} className={`${css(styles.link)}`} >
        Read more...
      </Link>
    </div>
  )
}
module.exports = RecipeOverview

const styles = StyleSheet.create({
  recipeoverview: {
    //outline: '1px solid black !important',
    //marginTop: 10,
    padding: 24
  },
  link: {
    //outline: '1px solid black !important',
    //marginTop: 10,
    marginLeft: 54
  },
})
