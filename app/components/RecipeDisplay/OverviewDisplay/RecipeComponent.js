import React from 'react'
const PropTypes=React.PropTypes
import Moment from 'react-moment'
  // const Moment=require('react-moment').default
import { StyleSheet, css } from 'aphrodite'

function RecipeComponent(props) {
  return (
    <div className='card-recipe col-md-12'>
      <div className='recipe-video-preview-holder'>
        <img
        height={state.width/1.62}
          className={
            `img-responsive recipe-video-preview ${css(styles.thumbnail)}`
          }
          src={
            `/public/img/recipes/${props.videoThumbnail}`
          }
        />
      </div>
      <div className='card-recipe-inner'>
        <h3 className='recipe-title'> {
            props.title
          }
        </h3>
      </div>
      <div className='recipe-author'>
        <img className={
            `img-responsive recipe-author-thumbnail ${css(styles.author)}`
          }
          src={
            `/public/img/recipes/${props.author.thumbnail}`
          }
        />
        <h4 className='recipe-author-name'> {
            props.author.name
          }
        </h4>
      </div>
      <div className={
          `card-content ${css(styles.cardcontent)}`
        }>
        <div className={
            `creation-date ${css(styles.date)}`
          }>
          Date:
            <Moment unix format='MM/YYYY'>{props.created}</Moment>
          </div>
        <div className="recipe categories">
          Categories: {
            props.categories.join(' | ')
          }
        </div>
        <div className="recipe-description"> {
            props.description
          }
        </div>
      </div>
    </div>
  )
}

RecipeComponent.propTypes={
  videoThumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  }),
  categories: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
}

module.exports=RecipeComponent


const styles=StyleSheet.create({
  thumbnail: {
    width: '100%',
  },
  author: {
    width: 30,
    height: 30,
    borderRadius: 50,
    float: 'left',
    'margin-right': 10,
  },
  author: {
    width: 30,
    height: 30,
    borderRadius: 50,
    float: 'left',
    'margin-right': 10,
  },
  cardcontent: {
    float: 'left',
  },
  date: {
    float: 'right',
  }
})
