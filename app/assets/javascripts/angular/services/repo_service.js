app.service("RepoSearch", function($http){
 var url= "/api/v1/repos"
 this.search = function(repo,user){
     return $http.get(url+"?user="+user+"&repo="+repo);
 }
});
