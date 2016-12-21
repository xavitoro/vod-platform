const React = require('react')
const ReactDOM = require('react-dom')
const routes = require('./config/routes')
import configureStore from './data/store'
import {Provider} from 'react-redux'

ReactDOM.render((
  <Provider store={configureStore({})}>
    {routes}
  </Provider>
), document.getElementById('app'))
