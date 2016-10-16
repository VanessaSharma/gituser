var apiKey = require('./../.env').apiKey;

exports.Repo = function() {
};

exports.Repo.prototype.getUser = function(gitname) {
  $.get('http://api.github.com/users/' + gitname + '?access_token=' + apiKey).then(function(response) {
    displayFunction(gitname, response.main.gitname);
  }).fail(function(error){
    $('#showUser').text(error.responseJSON.message);
  });
};


