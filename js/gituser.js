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
