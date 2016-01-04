(function () {
  var app = angular.module('store', ['store-products']);
  
  app.controller('StoreController', ['$scope','$http','$log', function($scope,$http,$log) {
    $scope.$log = $log;
    $http.get('/products.json').success(function(data) {
      $scope.$log.info('Info: product length=' + data.length);
      $scope.products = data;
    }).error(function (error) {
      $scope.$log.error('Error:' + error.message);
    });
  }]);
})();
