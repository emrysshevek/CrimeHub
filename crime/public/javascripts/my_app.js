angular.module('myApp', []).
controller('myController', ['$scope', '$http',
  function($scope, $http) {
    $scope.crimes = [];
    $http.get('/user/profile')
      .success(function(data, status, headers, config) {
        $scope.user = data;
        $scope.error = "";
        $scope.crimes = data.crimes;
        console.log($scope.crimes);
      }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }
]);
