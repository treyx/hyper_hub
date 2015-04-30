app.controller('ReposCtrl', ['$scope', 'Repo', function($scope, Repo) {
  $scope.getRepoData = Repo.getRepoData($scope.searchUser, $scope.searchRepo);
}]);
