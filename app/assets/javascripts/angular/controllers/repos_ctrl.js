app.controller('ReposCtrl', ['$scope', 'Repo', function($scope, Repo) {
  $scope.repos = Repo.all();
}]);
