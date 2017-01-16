import React, {Component, PropTypes} from 'react'

import Moment from 'react-moment'
  // const Moment=require('react-moment').default
import { StyleSheet, css } from 'aphrodite'

class CustomImage extends Component {
   constructor(props) {
        super(props)
        this.state = {dimensions: {}}
        this.onImgLoad = this.onImgLoad.bind(this)
    }
    onImgLoad({target:img}) {
        this.setState({
          dimensions:{
            height:img.width/1.62,
            width:img.width
          }
        });
    }
    render(){
        const src = `/public/img/recipes/${this.props.videoThumbnail}`;
        const {width, height} = this.state.dimensions;

        return (
          <img src={src} className={`img-responsive recipe-video-preview ${css(styles.thumbnail)}`} />
        );
    }
}

export default CustomImage


const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
  },
  main: {
    height: '100%', // Really it's a test, setState can change width with $(window).height
  }
})
