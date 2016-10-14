var Repo = require('./js/gituser.js').repoModule;


var displayGitUser = function(gituser) {
  $('#showRepo').text("This is " + gituser + " repositories.");
};


$(document).ready(function() {
  var repoObject = new Repo();
  $('#repoName').click(function() {
  var gituser = $('#name').val();
  $('#name').val("");
  repoObject.getRepo(gitname);
  });
});
