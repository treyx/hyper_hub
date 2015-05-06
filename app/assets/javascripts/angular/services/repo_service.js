app.service("GitSearch", function($http){
 var urlRepo= "/api/v1/repos"
 this.searchRepo = function(user,repo){
     return $http.get(urlRepo+"?user="+user+"&repo="+repo);
 };

});
