import React from 'react'
import { Link } from 'react-router'

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
