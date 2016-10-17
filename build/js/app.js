(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "2b79455100e7dbf98ede90b26f1e89341fe5cac0"

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;


exports.Repo = function() {
};

exports.Repo.prototype.getRepo = function(gitname) {
  $.get('https://api.github.com/users/'+ gitname +'?access_token=' + apiKey).then(function(response) {
    $('.showUserName').text(response.login);
  }).fail(function(error){
    $('.showAllRepo').text(error.responseJSON.message);
  });
};


exports.Repo.prototype.getAllRepo = function(gitname) {
  $.get('https://api.github.com/users/'+ gitname + '/repos').then(function(repos_url) {
    for(var i = 0; i<repos_url.length; i++) {
      $('.showAllRepo').append('<li>' + repos_url[i].name + ":" + '<i>' + repos_url[i].description
      + '</i>' + '</li>');
    }
  }).fail(function(error){
    $('.showAllRepo').text(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
var Repo = require('../js/gituser.js').Repo;

$(document).ready(function() {
  var newUser = new Repo();
  $('#submit').click(function() {
    var gitname = $('#gitname').val();
    $('#gitname').val("");
    $('.showRepo').empty();
    $('.showAllRepo').empty();
    newUser.getRepo(gitname);
    newUser.getAllRepo(gitname);
  });
});

},{"../js/gituser.js":2}]},{},[3]);
