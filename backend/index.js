const express = require('express')
var app = express();

const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

var createError = require('http-errors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var indexRouter = require('./routes/index');
app.use('/', indexRouter);
var scoringRouter = require('./routes/scoring');
app.use('/scoring', scoringRouter);