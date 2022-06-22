//require packages
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes setting
app.get('/', (req, res) => {
  res.send('This is my first project')
})

// listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}`)
})