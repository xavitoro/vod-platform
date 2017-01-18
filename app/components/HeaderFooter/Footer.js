import React from 'react'
import {Link } from 'react-router'

function Footer() {
  return (
    <footer className='primary-footer'>
      <div className='group container nav-wrapper'>
        <small>&copy; Keychn Experience</small>
        <div className='social-icons'>
          <Link href='https://www.facebook.com/keychn/'><img className = 'logo-social-media' src="../../public/icons/facebook.svg" /></Link>
          <Link href='https://www.twitter.com/keychn/'><img className = 'logo-social-media' src="../../public/icons/twitter.svg" /></Link>
          <Link href='https://www.instagram.com/keychn/'><img className = 'logo-social-media' src="../../public/icons/instagram.svg" /></Link>
        </div>
        <nav className='primary-nav'>
          <Link to='/' href='/'>Recipes</Link>
          <Link to='/recipe/create' href='/'>Create Recipe</Link>
          <Link to='/register' href='/' id ='register'>Register</Link>
          <Link to='/aboutus' href='/'>About us</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
