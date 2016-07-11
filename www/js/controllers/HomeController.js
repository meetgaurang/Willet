angular.module('appwillet.controllers')
.controller('HomeController', ['$scope', '$rootScope', '$state', '$ionicModal', '$timeout', 'getAllProductsService',
	function($scope, $rootScope, $state, $ionicModal, $timeout, getAllProductsService) {

  	$scope.allProducts = [];
  	$scope.isMoreProductsAvailable = true;
  	getAllProductsService.getAllProducts().then(function successCallback(response){
  		$scope.allProducts = response.data.mobiles;
      $scope.filterValues = response.data.filterValues;
  	},
  	function errorCallback(error){
  		alert("Error..");
  	});

    // Define filter modal
    $ionicModal.fromTemplateUrl('partials/productfiltermodal.html', {
      scope: $scope,
      animation: 'slide-in-up',
      hardwareBackButtonClose: true
    }).then(function(modal) {
      $scope.filterModal = modal;
    });
    $scope.openFilterModal = function() {
      $scope.filterModal.show();
    };
    $scope.closeFilterModal = function() {
      $scope.filterModal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.filterModal.remove();
    });
    $scope.slider = {
      minValue: 8000,
      maxValue: 30000,
      options: {
          floor: 2499,
          ceil: 85999,
          step: 1,
          noSwitching: true
      }
    };
    $scope.toggleProductSelected = function($event) {
      $($event.currentTarget).toggleClass("active");
    };

  	// Load next page
  	$scope.loadMoreProducts = function() {
  		if($scope.allProducts.length > 30) {
  			$scope.isMoreProductsAvailable = false;
  		}
  		else {
        // Use some delay so that it acts like it is actually hitting a service. 
        // Currently it will hit simulated service
  			$timeout(function(){
  				getAllProductsService.getAllProducts().then(function successCallback(response){
  			  		$scope.allProducts = response.data.mobiles.concat($scope.allProducts);
  			  	},
  			  	function errorCallback(error){
  			  		alert("Error..");
  			  	});
  			  	$scope.$broadcast('scroll.infiniteScrollComplete');
  	  	}, 1600);
  		}
  	};

  	$scope.loadDetails = function(product) {
      $rootScope.selectedProduct = product;
  		$state.go("app.productdetails");
  	};
}]);