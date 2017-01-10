import React, {Component} from 'react'

export default class DynamicImage  extends Component {
   constructor(props) {
        super(props)
        this.state = {dimensions: {}}
        this.onImgLoad = this.onImgLoad.bind(this)
    }
    onImgLoad({target:img}) {
        this.setState({
          dimensions:{
            height: img.width/1.62,
            width: img.width
          }
        });
    }
    render(){
        const src = this.props
        const {width, height} = this.state.dimensions
        const {className} = this.props

        return (
          <img width={width} height={height} onLoad={this.onImgLoad} src={src}/>
        )
    }
}
