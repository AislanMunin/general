(function () {
  var app = angular.module('store-products', []);
  
  app.directive('storeProduct', function () {
    return {
      restrict: 'E',
      templateUrl: 'store-product.html'
    };
  });
  
  app.directive('storeGallery', function () {
    return {
      restrict: 'E',
      templateUrl: 'store-gallery.html',
      controller: function () {
        this.current = 0;
        this.setCurrent = function (curr) {
          this.current = curr || 0;
        };
        this.showImg = function (curr) {
          return this.current !== curr;
        };
      },
      controllerAs: 'galleryCtrl'
    };
  });
  
  app.directive('storeReview', function () {
    return {
      restrict: 'E',
      templateUrl: 'store-review.html',
      controller: function () {
        this.review = {};
        this.addReview = function (product) {
          this.review.createdOn = Date.now();
          product.reviews.push(this.review);
          this.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });
  
  app.directive('storePanel', function () {
    return {
      restrict: 'E',
      templateUrl: 'store-panel.html',
      controller: function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
          this.tab = setTab || 1;
        };
        this.isSelected = function (checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panelCtrl'
    };
  });
  
  app.directive('tabDescription', function () {
    return {
      restrict: 'E',
      templateUrl: 'tab-description.html'
    };
  });
  
  app.directive('tabSpecification', function () {
    return {
      restrict: 'E',
      templateUrl: 'tab-specification.html'
    };
  });
  
  app.directive('tabReview', function () {
    return {
      restrict: 'E',
      templateUrl: 'tab-review.html'
    };
  });
})();