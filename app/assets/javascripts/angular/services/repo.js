app.factory('Repo', ['$resource', function($resource) {
  function Repo() {
    this.service = $resource('/api/v1/repos');
  };
  Repo.prototype.all = function() {
    return this.service.query();
  };
  return new Repo;
}]);
