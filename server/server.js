import express from 'express'
import api from './api/api'
import err from './middleware/err'
import path from 'path'
import {checkUser} from './middleware/authMiddleware'

var app = express()

// setup the app middlware
require('./middleware/appMiddleware')(app)

// setup the api
app.use('/api', api)

// set up global error handling
// // pattern 1
// app.use(err)
// pattern 2
app.use(err())

app.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

app.get('/test', checkUser, function (req, res) {
  res.send('check user worked')
})

app.get('/*', function (req, res) {
  // console.log('cookies', req.cookies)
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})




module.exports = app
