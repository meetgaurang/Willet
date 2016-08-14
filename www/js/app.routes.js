angular.module('appwillet')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'partials/sidebarmenu.html',
    controller: 'AppController'
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }
    }
  })
  .state('app.productdetails', {
    url: '/productdetails',
    views: {
      'menuContent': {
        templateUrl: 'partials/productdetails.html',
        controller: 'ProductDetailsController'
      }
    }
  })
  .state('app.timeline', {
    url: '/timeline',
    views: {
      'menuContent': {
        templateUrl: 'partials/timeline.html',
        controller: 'TimelineController'
      }
    }
  })
  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
}]);