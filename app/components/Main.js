import React from 'react'
import Header from './Header'

const Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
      <Header />
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main
