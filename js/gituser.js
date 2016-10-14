var apiKey = require('./../.env').apikey;

function Repo(){
}


exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.repoModule = Repo;
