app.service("GitSearch", function($http){

  var urlRepo= "/api/v1/repos"

  this.searchRepo = function(user,repo){
    return $http.get(urlRepo+"?user="+user+"&repo="+repo);
  };

  var urlCommit= "/api/v1/commits"

  this.searchCommits = function(user,repo){
    return $http.get(urlCommit+"?user="+user+"&repo="+repo);
  };

});
