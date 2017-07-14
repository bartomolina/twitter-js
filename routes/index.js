const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function(io) {

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find({
      name: name
    });
    res.render('index', {
      tweets: list,
      showForm: true,
      name: name
    });
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    var id = tweetBank.add(name, text);
    io.sockets.emit('newTweet', {
      name: name,
      text: text,
      id: id
    });
    res.redirect('/');
    // res.end();
    // res.send('Event received');
    // res.status(201).send({});
    // next();
  });

  router.get('/tweets/:id', function(req, res) {
    var id = Number(req.params.id);
    var list = tweetBank.find({
      id: id
    });
    res.render('index', {
      tweets: list,
      showForm: false
    });
  });

  // router.get('/stylesheets/style.css', function (req, res) {
  //   // res.send('Stylesheets!');
  //   res.sendFile('/public/stylesheets/style.css');
  // });

  return router;
};
