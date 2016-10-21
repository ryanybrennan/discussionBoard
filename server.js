var express = require('express')
    bodyParser = require('body-parser')
    mongoose = require('mongoose')
    path = require('path')
    root = __dirname
    port = 8000
    session = require('express-session')
    app = express()
app.use(bodyParser.json())
app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));
app.use(express.static(path.join(root, '/client')))
app.use(express.static(path.join(root, '/bower_components')))
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(port, function(){
  console.log('listening on port'+port);
})
