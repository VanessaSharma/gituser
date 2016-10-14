var apiKey = require('./../.env').apikey;

function Repo(){
}

Repo.prototype.getRepo = function(gitname) {
  $.get('http://api.github,com/users/' + gitname + '?access_token=' + 'apiKey').then(function(response) {
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.repoModule = Repo;
