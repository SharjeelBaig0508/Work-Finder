var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var { mongodb_url } = require("./database_layer/database_config");

var app = express();

mongoose.connect(mongodb_url, {
  useNewUrlParser: "true",
  useUnifiedTopology: "true",
});

mongoose.connection.on("connected", () => {
  console.log(`Connected to ${mongodb_url.split("@")[1]}`);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

BASE_URL = "api/v1"
app.use('/', require('./routes/index'));
app.use(BASE_URL + '/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send({ response_code: 404, response_message: "API End Point not Found" });
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.status(500).send({ response_code: 500, response_message: "Something Went Wrong!" });
  console.log(err)
});

module.exports = app;
