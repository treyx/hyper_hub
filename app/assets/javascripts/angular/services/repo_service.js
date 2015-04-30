// app.service('Repo', ['$resource', function($resource) {
//     this.getRepoData = function(owner, repo){
//     var repo = $resource('/api/v1/repos', {owner: "@owner", repo: "@repo"});
//     .success(function (data){

//     })
//     .error(function (data, status) {
//       if (status === 404) {
//         $scope.error = 'That repository does not exist';
//       } else {
//         $scope.error = 'Error: ' + status;
//       }
//     });

//     return repo.query(owner: owner, repo: repo )

// }]);
