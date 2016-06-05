angular.module('appwillet.controllers')
.controller('HomeController', ['$scope', '$state', '$ionicModal', '$timeout', 'getAllProductsService',
	function($scope, $state, $ionicModal, $timeout, getAllProductsService) {

  	$scope.allProducts = [];
  	$scope.isMoreProductsAvailable = true;
  	getAllProductsService.getAllProducts().then(function successCallback(response){
  		$scope.allProducts = response.data.mobiles;
  	},
  	function errorCallback(error){
  		alert("Error..");
  	});

  	// Load next page
  	$scope.loadMoreProducts = function() {
  		if($scope.allProducts.length > 40) {
  			$scope.isMoreProductsAvailable = false;
  		}
  		else {
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
  		$state.go("app.productdetails")
  	}
}]);