(function () {
  var app = angular.module('store-products', []);
  
  app.directive('storeProduct', function () {
    return {
      restrict: 'E',
      templateUrl: '/components/store-product/store-product.html'
    };
  });
  
  app.directive('storeGallery', function () {
    return {
      restrict: 'E',
      templateUrl: '/components/store-product/store-gallery.html',
      controller: function ($scope) {
        $scope.currentImage = 0;
        this.setCurrent = function (curr) {
          $scope.currentImage = curr || 0;
        };
        this.showImg = function (curr) {
          return $scope.currentImage !== curr;
        };
      },
      controllerAs: 'galleryCtrl'
    };
  });
  
  app.directive('storeReview', function () {
    return {
      restrict: 'E',
      templateUrl: '/components/store-product/store-review.html',
      controller: function ($scope) {
        $scope.reviewSelected = {};
        $scope.reviewRates = [ 
          { value: undefined, label: 'Rate the Product' }, 
          { value: 5, label: '5' }, 
          { value: 4, label: '4' }, 
          { value: 3, label: '3' }, 
          { value: 2, label: '2' }, 
          { value: 1, label: '1' }
        ];
        $scope.isNew = false;
        this.save = function (product) {
          if ($scope.isNew) {
            $scope.reviewSelected.createdOn = Date.now();
            product.reviews.push($scope.reviewSelected);
          } else {
            for (var i = 0, len = product.reviews.length; i < len; i++) {
              if (product.reviews[i].createdOn == $scope.reviewSelected.createdOn) {
                $scope.reviewSelected.createdOn = Date.now();
                product.reviews[i] = $scope.reviewSelected;
                break;
              }
            }
          }
          $scope.reviewSelected = {};
        };
        this.edit = function (product, review) {
          $scope.reviewSelected = review;
          $scope.$log.info('Info: product review edit sku:' + product.sku + ';rate:' + review.rate);
        };
        this.clear = function () {
          $scope.reviewSelected = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });
  
  app.directive('storePanel', function () {
    return {
      restrict: 'E',
      templateUrl: '/components/store-product/store-panel.html',
      controller: function ($scope) {
        $scope.tabSelected = 1;
        this.selectTab = function (setTab) {
          $scope.tabSelected = setTab || 1;
        };
        this.isSelected = function (checkTab) {
          return $scope.tabSelected === checkTab;
        };
      },
      controllerAs: 'panelCtrl'
    };
  });
  
  app.directive('tabDescription', function () {
    return {
      restrict: 'E',
      templateUrl: '/components/store-product/tab-description.html'
    };
  });
  
  app.directive('tabSpecification', function () {
    return {
      restrict: 'E',
      templateUrl: '/components/store-product/tab-specification.html'
    };
  });
  
  app.directive('tabReview', function () {
    return {
      restrict: 'E',
      templateUrl: '/components/store-product/tab-review.html'
    };
  });
})();
