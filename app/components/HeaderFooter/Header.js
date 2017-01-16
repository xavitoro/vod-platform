import React from 'react'
import { Link } from 'react-router'

import { StyleSheet, css } from 'aphrodite'

const Header=React.createClass({
  render: function() {
    return (
      <header className={`navigation__header ${css(styles.header)}`}>
        <nav role='navigation' className='navbar header-navigation-holder'>
          <div className="navbar navbar-default navbar-static-top">
            <div className="container header__inner ">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a href='http://learnlayout.com/inline-block.html' className='header__logo-link'>
                  <img className={`header__logo ${css(styles.icon)}`} src='../../public/img/KeychnSignature.png' alt='Logo mobile'/>
                </a>
              </div>
              <div className="collapse navbar-collapse header__navigation" id="header-navigation">
                <ul className='nav navbar-nav header__navigation-list'>
                  <li className=''>
                    <a className='recipe_list-link' href='/'>
                      Recipes
                    </a>
                  </li>
                  <li className=''><Link to='/recipe/create' href='/'>Create Recipe</Link></li>
                </ul>
                <ul className='nav navbar-nav navbar-right header__navigation-list'>
                  <li className=''>
                    <a className='sign-in-link' href='/'>
                      Sign In
                    </a>
                  </li>
                </ul>
                <ul className='nav navbar-nav navbar-right header__navigation-list'>
                  <li className=''>
                    <a className='user-profile-link' href='/'>
                      Xavi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
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
