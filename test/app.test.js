var request = require('supertest')
  , express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('how');
});

request(app)
  .get('/')
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
  });
