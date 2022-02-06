const bodyParser = require('body-parser');
const express = require('express')

const foodRoute = require('./src/routes/foodRoute')
const drinkRoute = require('./src/routes/drinkRoute')
const snackRoute = require('./src/routes/snackRoute')
const tableRoute = require('./src/routes/tableRoute')

const app = express()

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('hello world')
})

app.use('',foodRoute);
app.use('',drinkRoute);
app.use('',snackRoute);
app.use('',tableRoute);


app.listen(3000)
