app.controller("ReposCtrl", ["GitSearch", "$scope", function(GitSearch, $scope) {

  $scope.issues = [];
  $scope.size = [];
  $scope.stars = [];
  $scope.forks = [];

  $scope.searchRepo = function(user, repo) {
    GitSearch.searchRepo(user, repo).success(function(data){

        var newByte = convertBytes(data.size)

        $scope.forks.push({key: data.name, y: data.forks});
        $scope.issues.push({key: data.name, y: data.open_issues});
        $scope.size.push({key: data.name, y: data.size});
        $scope.stars.push({key: data.name, y: data.stargazers_count});

    });
  }

  function convertBytes(bytes) {
   if(bytes == 0) return '0 Byte';
   var k = 1000;
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   var i = Math.floor(Math.log(bytes) / Math.log(k));
   return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}


$scope.pieOptions = {
            chart: {
                type: "pieChart",
                height: 200,
                width: 200,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                transitionDuration: 500,
                labelThreshold: 0.01,
                showLegend: false
            }
        };

}]);

