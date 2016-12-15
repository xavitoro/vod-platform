import React from 'react'
const PropTypes = React.PropTypes
import { Link } from 'react-router'
import Moment from 'react-moment'
// const Moment = require('react-moment').default
import { StyleSheet, css } from 'aphrodite'

function RecipeComponent (props) {
  return (
    <div className='show-recipe'>
      <img className={css(styles.thumbnail)} src={`/public/img/recipes/${props.videoThumbnail}`} />
      <div>
        <h4>{props.author.name}</h4>
        <img className={css(styles.author)} src={`/public/img/recipes/${props.author.thumbnail}`} />
        <h3>{props.title}</h3>
        <p><Moment unix format='MM/YYYY'>{props.created}</Moment></p>
        <p>({props.categories.join(' | ')})</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

RecipeComponent.propTypes = {
  videoThumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  }),
  categories: PropTypes.array.isRequired,
  _id: PropTypes.string.isRequired
}

module.exports = RecipeComponent


const styles = StyleSheet.create({
  thumbnail: {
    width: 100,
    float: 'left',
  },

  author: {
    width: 50,
    height: 50,
    borderRadius: 50,
    float: 'left',
  },
})
