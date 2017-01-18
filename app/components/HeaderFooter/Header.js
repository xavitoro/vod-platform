import React from 'react'
import { Link } from 'react-router'

import { StyleSheet, css } from 'aphrodite'

const Header = React.createClass({
  render() {
    return (
      <header className='navigation__header'>
        <div className='group container nav-wrapper'>
          <div className='keychn-logo'>
            <Link to='/' href='/'><img className = 'logo' src="../../public/img/KeychnSignature.png" /></Link>
          </div>
          <nav className='primary-nav'>
            <Link to='/' href='/'>Recipes</Link>
            <Link to='/recipe/create' href='/'>Create Recipe</Link>
            <Link to='/register' href='/' id ='register'>Register</Link>
          </nav>
        </div>
      </header>
    )
  }
})

export default Header

const styles=StyleSheet.create({
  header: {
    //background: 'rgba(250, 255, 109, 1)',
    //padding: '5px 50px',
    width: '100%',
    'min-height': '40px',
    'z-index': '1050',
    // position: 'fixed',
    left: 0,
    top: 0,
  },
  icon: {
    width: 100,
  },
})
