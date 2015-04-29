app.controller('ReposCtrl', ['$scope', '$resource', function($scope, $resource) {
  var Repos = $resource('/api/repos');
  $scope.repos = Repos.query();
}]);
