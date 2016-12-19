import React from 'react'
import { StyleSheet, css } from 'aphrodite'

function Header() {
  return (
    <header className={`navigation__header ${css(styles.header)}`}>
      <nav role='navigation' className='navbar header-navigation-holder'>
        <div className='header__inner'>
          <div className='navbar-header'>
            <a href='/' className='header__logo-link'>
              <img className={`header__logo ${css(styles.icon)}`} src= '../../public/img/KeychnSignature.png' alt='Logo mobile' />
            </a>
          </div>
          <div id='header-navigation' className='collapse navbar-collapse header__navigation'>
          <ul className='nav navbar-nav header__navigation-list'>
            <li className=''><a className='recipe_list-link'href='/'>Recipes</a></li>
          </ul>
          </div>
        </div>
      </nav>
    </header >
  )
}

module.exports = Header

const styles = StyleSheet.create({
  header: {
    background: 'rgba(250, 255, 109, 1)',
    padding: '5px 50px',
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
