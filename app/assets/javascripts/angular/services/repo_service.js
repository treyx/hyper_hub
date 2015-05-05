app.service("RepoSearch", function($http) {
  this.search = function(user, repo) {
      return $http.get(‘/api/v1/repos’, { user: user, repo: repo });
  }
});
