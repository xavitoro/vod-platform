import React from 'react'
import { Link } from 'react-router'

const Header = React.createClass({
  render() {
    return (
      <header className='navigation__header'>
        <div className='group container nav-wrapper'>
          <nav className='primary-nav'>
            <div className='nav-wrapper'>
              <Link to='/' href='/'><img className = 'keychn-logo' src="../../public/img/KeychnSignature.png" /></Link>
              <ul className= 'menu-link'>
                <li><Link to='/' href='/'>Recipes</Link></li>
                <li><Link to='/recipe/create' href='/'>Create Recipe</Link></li>
                <li><Link to='/register' href='/' id ='register'>Register</Link></li>
              </ul>
            </div>
          </nav>
          <div className='secondary-header'>
            <h1>Learn with chefs</h1>
            <p>Attend to our live MasterClasses or watch the recorded video</p>
            <form className='form-email'>
              <input type='email' className='form-input' value='' placeholder='I want to cook! Take my email!' id='email-value' required=''/>
              <input type='submit' className='btn' id='submit-email' value='Get started for FREE'/>
            </form>
          </div>
        </div>
      </header>
    )
  }
})

export default Header
