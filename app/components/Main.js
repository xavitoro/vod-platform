import React from 'react'
import Header from './HeaderFooter/Header'
import Footer from './HeaderFooter/Footer'

const Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

module.exports = Main
