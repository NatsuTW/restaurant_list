//require packages
const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

// listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}`)
})