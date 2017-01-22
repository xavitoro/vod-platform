import React, {Component} from 'react'
const PropTypes=React.PropTypes
import { StyleSheet, css } from 'aphrodite'

export default class MainImage  extends Component {
   constructor(props) {
        super(props)
    }
    updateDimensions() {
      var w = window,
          d = document,
          documentElement = d.documentElement,
          body = d.getElementsByTagName('body')[0],
          width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
          height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

      this.setState({width, height});
    }
    componentWillMount(){
        this.updateDimensions();
    }
    /*componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions);
    }*/
    render(){
        const src = `/public/img/recipes/${this.props.videoThumbnail}`;
        const {className} = this.props

        return (
          <div style={{width: '100%', height: this.state.height}}>
            <img src={src} style={{maxHeight: this.state.height}} className={`${css(styles.thumbnail)}`}/>
          </div>
        )
    }
}


module.exports = MainImage


const styles = StyleSheet.create({
  thumbnail: {
    maxWidth: '100%',
    display: 'table-cell',
    margin: 'auto'
  },
})
