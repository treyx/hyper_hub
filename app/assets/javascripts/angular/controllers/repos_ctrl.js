app.controller("ReposCtrl", ["RepoSearch", "$scope", function(RepoSearch, $scope)
{
  $scope.search = function(text){

  RepoSearch.search(text)

  }
}]);
