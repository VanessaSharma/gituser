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
      $('.showAllRepo').append('<li>' + repos_url[i].name + '</li>');
    }
  }).fail(function(error){
    $('.showAllRepo').text(error.responseJSON.message);
  });
};
