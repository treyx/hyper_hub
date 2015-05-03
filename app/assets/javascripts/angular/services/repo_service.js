app.service("RepoSearch", function($resource){

  var RepoSearch = $resource("/api/v1/repos", {user: "@searchUser", repo: "@searchRepo"});

  this.search = function(){
      return RepoSearch.query();
  }

});
