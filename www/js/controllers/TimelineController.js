angular.module('appwillet.controllers')
.controller('TimelineController', ['$scope', 'getTimelineDataService', '$ionicPopup', 
	function($scope, getTimelineDataService, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

	$scope.filterSelection = {
		"education": false,
		"work-experience": true,
		"bon-voyage": false,
		"certifications": false
	};
	getTimelineDataService.getTimelineData().then(function successCallback(response){
  		$scope.timelineData = response.data.timelineData;
  	},
  	function errorCallback(error){
  		alert("Error..");
  	});

  	$scope.showAlert = function() {
	   var alertPopup = $ionicPopup.alert({
	     //title: 'Don\'t eat that!',
	     cssClass: 'timeline-filter-modal',
	     templateUrl: 'partials/timelinefiltermodal.html'
	   });

	   alertPopup.then(function(res) {
	     console.log('Thank you for not eating my delicious ice cream cone');
	   });
	 };


}]);