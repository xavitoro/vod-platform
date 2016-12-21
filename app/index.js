const React = require('react')
const ReactDOM = require('react-dom')
const routes = require('./config/routes')
import store from './data/store'
import {Provider} from 'react-redux'

ReactDOM.render((
  <Provider store={store}>
    {routes}
  </Provider>
), document.getElementById('app'))
