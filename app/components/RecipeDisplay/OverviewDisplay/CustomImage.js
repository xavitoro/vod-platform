import React, {Component} from 'react'
const PropTypes=React.PropTypes
import Moment from 'react-moment'
  // const Moment=require('react-moment').default
import { StyleSheet, css } from 'aphrodite'

class CustomImage extends Component {
   constructor(props) {
        super(props);
        this.state = {dimensions: {}};
        this.onImgLoad = this.onImgLoad.bind(this);
    }
    onImgLoad({target:img}) {
        this.setState({dimensions:{height:img.height,
                                   width:img.width}});
    }
    render(){
        const {src} = `/public/img/recipes/${this.props}`;
        const {width, height} = this.state.dimensions;

        return (<img
                  src={src}
                  className={`img-responsive recipe-video-preview ${css(styles.thumbnail)}`}
                />
               );
    }
}

module.exports=CustomImage


const styles=StyleSheet.create({
  thumbnail: {
    width: '100%',
  },
  main: {
    height: '100%', // Really it's a test, setState can change width with $(window).height
  }
})
