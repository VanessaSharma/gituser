var apiKey = require('./../.env').apiKey;

exports.Repo = function() {
};

exports.Repo.prototype.getRepo = function(gitname) {
  $.get('http://api.github.com/users/' + gitname + '?access_token=' + apiKey).then(function(response) {
    displayFunction(gitname, response.main.login);
  }).fail(function(error){
    $('.showRepo').text(error.responseJSON.message);
  });
};


exports.Repo.prototype.getAllRepo = function(gitname){
  $.get('https://api.github.com/users/'+ gitname + '/repos').then(function(repos_url){
    for(var i = 0; i<repos_url.length; i++){
      console.log(repo_url[1]);
  }).fail(function(error){
    $('.showAllRepo').text(error.responseJSON.message);
  });
};


