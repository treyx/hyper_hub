app.controller('ReposCtrl', ['$scope', '$resource', function($scope, $resource) {
  var Repos = $resource('/api/v1/repos');
  $scope.repos = Repos.query();
}]);
