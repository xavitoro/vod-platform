import React, {Component} from 'react'
const PropTypes=React.PropTypes
import { StyleSheet, css } from 'aphrodite'

export default class DynamicImage  extends Component {
   constructor(props) {
        super(props)
        //this.state = {dimensions: {}}
        //this.onImgLoad = this.onImgLoad.bind(this)
    }
    /*onImgLoad({target:img}) {
        this.setState({
          dimensions:{
            height: img.width/(1.62*2),
            width: img.width,
          }
        });
    }*/
    render(){
        const src = `/public/img/recipes/${this.props.videoThumbnail}`;
        //const {width, height} = this.state.dimensions
        const {className} = this.props

        return (
          <div/* style={{width: this.state.width, height: this.state.height}}*/>
            <img /*onLoad={this.onImgLoad} */src={src}
              className={`img-responsive recipe-author-thumbnail ${css(styles.thumbnail)}`}/>
          </div>
        )
    }
}


module.exports = DynamicImage


const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
  },
})
