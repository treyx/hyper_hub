app.controller("ReposCtrl", ["RepoSearch", "$scope", function(RepoSearch, $scope) {
  $scope.search = function(user, repo) {
    RepoSearch.search(user, repo);
  }
}]);
