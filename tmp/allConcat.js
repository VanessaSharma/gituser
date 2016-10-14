var User = require('../js/gituser.js').userModule;

$(document).ready(function() {
  var newUser = new User();
  $('#userGitname').click(function() {
    var gitname = $('#gitname').val();
    $('#gitname').val("");
    newUser.getUser(gitname);
  });
});
// var displayGitUser = function(gitName) {
//   $('#showRepo').text("This is " + gitName + " repositories.");
// };
//
//
// $(document).ready(function() {
//   var repoObject = new Repo();
//   $('#submit').click(function(event)
//   var gitName = $('#gitName').val();
//   $('#gitName').val("");
//   repoObject.getRepo(gitName, displayGitUser);
//   });
// });
