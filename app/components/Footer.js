import React from 'react'
import { StyleSheet, css } from 'aphrodite'

function Footer() {
  return (
    <footer>
      <div className={`container navigation__footer ${css(styles.footer)}`}>
        <div className='row'>
          <div className='col-sm-6 footer-social'>
            <a href='https://www.facebook.com/keychn/'><i className='fa fa-facebook fa-2x' aria-hidden='true'></i></a>
            <a href='https://twitter.com/keychn'><i className='fa fa-twitter fa-2x' aria-hidden='true'></i></a>
            <a href='https://www.instagram.com/keychn/'><i className='fa fa-instagram fa-2x' aria-hidden='true'></i></a>
            <a href='http://pinterest.com/keychn'><i className='fa fa-pinterest fa-2x' aria-hidden='true'></i></a>
          </div>
        <div className='col-sm-6 footer-social'>
          <ul className='nav navbar-nav navbar-right'>
            <li><a className='terms' href='/terms'>Terms</a></li>
            <li><a className='privacy' href='/privacy-policy'>Privacy</a></li>
            <li><a href='http://blog.keychn.com'>Blog</a></li>
            <li><a href='mailto:mise@keychn.com'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

module.exports = Footer

const styles = StyleSheet.create({
  footer: {
    background: 'rgba(250, 255, 109, 1)',
    width: '100%',
  },
})
