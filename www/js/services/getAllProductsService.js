angular.module('appwillet.services')
.factory('getAllProductsService', function($http) {
	// factory returns an object
  	// you can run some code before
	return {
		getAllProducts : function() {
			return $http({
				"method": "GET",
				"url": "http://localhost:8080/willet/services/products"
			});
		}
	}
});