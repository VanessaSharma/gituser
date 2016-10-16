var Repo = require('../js/gituser.js').Repo;

$(document).ready(function() {
  var newUser = new Repo();
  $('#submit').click(function() {
    var gitname = $('#gitname').val();
    $('#gitname').val("");
    newUser.getRepo(gitname);
    newUser.getAllRepo(gitname, repos_url)
  });
});
