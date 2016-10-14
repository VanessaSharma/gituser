var Repo = require('./js/gituser.js').repoModule;


var displayGitUser = function(gitName) {
  $('#showRepo').text("This is " + gitName + " repositories.");
};


$(document).ready(function() {
  var repoObject = new Repo();
  var gitName = $('#gitName').val();
  $('#gitName').val("");
  repoObject.getRepo(gitName, displayGitUser);
  });
});
