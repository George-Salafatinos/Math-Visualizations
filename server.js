// server.js
// where your node app starts

// init project
const express = require("express");
const port = 3000;
const app = express();
const path = require('path')


app.use(express.static("public"));

app.get("/", function (request, response) {
  app.use('/static', express.static('static'))
  app.use('/modules', express.static('modules'))
  app.use('/data', express.static('data'))
  // app.use('/data', express.static('data'))
  response.sendFile(__dirname + "/views/homepage.html");
});

app.get("/wave-touch", function (request, response) {
  app.use('/static', express.static('static'))
  app.use('/modules', express.static('modules'))
  app.use('/data', express.static('data'))
  // app.use('/data', express.static('data'))
  response.sendFile(__dirname + "/views/wave-touch.html");
});


app.get("/balls-in-a-spaceship", function (request, response) {
  app.use('/static', express.static('static'))
  app.use('/modules', express.static('modules'))
  app.use('/data', express.static('data'))
  // app.use('/data', express.static('data'))
  response.sendFile(__dirname + "/views/balls-in-a-spaceship.html");
});



var server = app.listen(process.env.PORT || port, listen);

// This call back just tells us that the server has started
function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://' + host + ':' + port);
    console.log('App listening at http://localhost:'+ port);
}
