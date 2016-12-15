const React = require('react')
const PropTypes = React.PropTypes
const { Link } = require('react-router')
import Moment from 'react-moment'
// const Moment = require('react-moment').default

function RecipeComponent (props) {
  return (
    <div className='show-card'>
      <img src={`/public/img/recipes/${props.videoThumbnail}`} />
      <div>
        <h4>{props.author.name}</h4>
        <img className='author-thumbnail' src={`/public/img/recipes/${props.author.thumbnail}`} />
        <h3>{props.title}</h3>
        <p><Moment unix format='MM/YYYY'>{props.created}</Moment></p>
        <p>({props.categories.join(' | ')})</p>
        <p>{props.description}</p>
      </div>
      <button>READ MORE</button>
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
