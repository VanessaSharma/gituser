(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "4630025621aaec882595816d0594490bdc680d17"

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apikey;

User = function() {
}

User.prototype.getUser = function(gitname, displayFunction) {
  $.get('http://api.github,com/users/' + gitname + '?access_token=' + apiKey).then(function(response) {
    displayFunction(gitname, response.main.gitname);
  }).fail(function(error){
    $('#showUser').text(error.responseJSON.message);
  });
};


exports.userModule = User;

},{"./../.env":1}],3:[function(require,module,exports){
var User = require('../js/gituser.js').userModule;

$(document).ready(function() {
  var newUser = new User();
  $('#userGitname').click(function() {
    var gitname = $('#gitname').val();
    $('#gitname').val("");
    newUser.getUser(gitname);
  });
});
// var displayGitUser = function(gitName) {
//   $('#showRepo').text("This is " + gitName + " repositories.");
// };
//
//
// $(document).ready(function() {
//   var repoObject = new Repo();
//   $('#submit').click(function(event)
//   var gitName = $('#gitName').val();
//   $('#gitName').val("");
//   repoObject.getRepo(gitName, displayGitUser);
//   });
// });

},{"../js/gituser.js":2}]},{},[3]);
