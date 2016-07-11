angular.module('appwillet.services')
.factory('getTimelineDataService', ['$http', function($http) {
	// factory returns an object
  	// you can run some code before
	return {
		getTimelineData : function() {
			return $http({
				"method": "GET",
				"url": "http://localhost:8080/willet/services/timeline"
			});
		}
	};
}]);