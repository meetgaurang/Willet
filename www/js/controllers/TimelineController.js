angular.module('appwillet.controllers')
.controller('TimelineController', ['$scope', 'getTimelineDataService', '$ionicModal', '$ionicPopup', '$ionicPopover',
	'$ionicScrollDelegate',
	function($scope, getTimelineDataService, $ionicModal, $ionicPopup, $ionicPopover, $ionicScrollDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

	$scope.filterSelection = {
		"education": true,
		"experience": true,
		"explorer": true,
		"certifications": true
	};
    $scope.toggleFilterValue = function(filterParam) {
    	$scope.filterSelection[filterParam] = !$scope.filterSelection[filterParam];
    	$ionicScrollDelegate.resize();
    }
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