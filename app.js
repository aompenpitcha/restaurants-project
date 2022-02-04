const bodyParser = require('body-parser');
const express = require('express')
const foodRoute = require('./src/routes/foodRoute')
const drinkRoute = require('./src/routes/drinkRoute')

const app = express()

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('hello world')
})

app.use('',foodRoute);
app.use('',drinkRoute);


app.listen(3000)
