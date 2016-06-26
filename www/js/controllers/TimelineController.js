angular.module('appwillet.controllers')
.controller('TimelineController', ['$scope', 'getTimelineDataService', '$ionicModal', '$ionicPopup', '$ionicPopover',
	function($scope, getTimelineDataService, $ionicModal, $ionicPopup, $ionicPopover) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

	$scope.filterSelection = {
		"education": false,
		"experience": true,
		"explorer": false,
		"certifications": false
	};
	getTimelineDataService.getTimelineData().then(function successCallback(response){
  		$scope.timelineData = response.data.timelineData;
  	},
  	function errorCallback(error){
  		alert("Error..");
  	});

  	$scope.openFilterModal = function($event) {
	   var alertPopup = $ionicPopup.alert({
	     //title: 'Don\'t eat that!',
	     cssClass: 'timeline-filter-popup',
	     templateUrl: 'partials/timelinefiltermodal.html',
	     scope: $scope,
	     buttons: [{
		    text: 'OK',
		    type: 'button-stable'
		  }]
	   });

	   alertPopup.then(function(res) {
	     console.log('Closing..');
	   });
	 };


}]);