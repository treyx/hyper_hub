var app = angular.module("hyperhub", ["nvd3"]);

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

app.controller("ReposCtrl", ["GitSearch", "$scope", function(GitSearch, $scope) {

  $scope.issues = [];
  $scope.size = [];
  $scope.stars = [];
  $scope.forks = [];
  $scope.commitHistory = [];

  $scope.searchRepo = function(user,repo) {
    GitSearch.searchRepo(user,repo).success(function(data){

      var newByte = convertBytes(data.size)

      $scope.forks.push({key: data.name, y: data.forks});
      $scope.issues.push({key: data.name, y: data.open_issues});
      $scope.size.push({key: data.name, y: data.size});
      $scope.stars.push({key: data.name, y: data.stargazers_count});
    });
  };

  $scope.searchCommits = function(user,repo) {
    GitSearch.searchCommits(user,repo).success(function(data){

      var obj = [];
      for ( var i in data) {
        var total = data[i].total;
        var week = data[i].week;
        obj.push({x: week, y: total})
      }
      $scope.commitHistory.push({key: repo, values: obj});
  });

  };

  function convertBytes(bytes) {
    if(bytes == 0) return '0 Byte';
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
  };


  $scope.pieOptions = {
    chart: {
        type: "pieChart",
        height: 200 ,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        noData: "Add A Repository",
        transitionDuration: 5000,
        labelThreshold: 0.01,
        showLegend: true
    }
  };

  $scope.barOptions = {
      chart: {
          type: 'multiBarChart',
          height: 450,
          margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 45
          },
          clipEdge: true,
          staggerLabels: true,
          transitionDuration: 700,
          stacked: true,
          noData: "Add A Repository",
          xAxis: {
              showMaxMin: false,
              tickFormat: function(d){
                return d3.time.format('%d-%b')(new Date(d * 1000));
              }

          },
          yAxis: {
              axisLabel: 'Number of Commits',
              axisLabelDistance: 40,
              tickFormat: function(d){
                      return d3.format(',.1f')(d);
              }
          }
      }
  };
}]);
