var Repo = require('../js/gituser.js').Repo;

$(document).ready(function() {
  var newUser = new Repo();
  $('#submit').click(function() {
    var gitname = $('#gitname').val();
    $('#gitname').val("");
    $('.showRepo').empty();
    $('.showAllRepo').empty();
    newUser.getRepo(gitname);
    newUser.getAllRepo(gitname);
  });
});
