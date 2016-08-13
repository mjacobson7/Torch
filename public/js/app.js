angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../features/home/home.html',
      controller: 'homeCtrl',
      // resolve: {
      //   user: function($rootScope, $state, mainService) {
      //     mainService.validateIfLoggedIn().then(function(response) {
      //       if(response.data = 'fail') {
      //         $state.go('login');
      //       }
      //     })
      //   }
      // }
    })

    .state('login', {
      url: '/login',
      templateUrl: '../features/login/login.html',
      controller: 'loginCtrl'
    })

    .state('userProfile', {
      url: '/userprofile',
      templateUrl: '../features/userProfile/userProfile.html',
      controller: 'userProfileCtrl',
      // resolve: {
      //   user: function($rootScope, $state, mainService) {
      //     mainService.validateIfLoggedIn().then(function(response) {
      //       if(response.data = 'fail') {
      //         $state.go('login');
      //       }
      //     })
      //   }
      // }
    })

    .state('updateProfile', {
      url: '/userprofile',
      templateUrl: '../features/updateProfile/updateProfile.html',
      controller: 'updateProfileCtrl',
      // resolve: {
      //   user: function($rootScope, $state, mainService) {
      //     mainService.validateIfLoggedIn().then(function(response) {
      //       if(response.data = 'fail') {
      //         $state.go('login');
      //       }
      //     })
      //   }
      // }
    })

    .state('custProfile', {
      url: '/custprofile',
      templateUrl: '../features/custprofile/custProfile.html',
      controller: 'custProfileCtrl',
      // resolve: {
      //   user: function($rootScope, $state, mainService) {
      //     mainService.validateIfLoggedIn().then(function(response) {
      //       if(response.data = 'fail') {
      //         $state.go('login');
      //       }
      //     })
      //   }
      // }
    })

    .state('prod', {
      url: '/prod',
      templateUrl: '../features/prodSites/prodSites.html',
      controller: 'prodSitesCtrl',
      // resolve: {
      //   user: function($rootScope, $state, mainService) {
      //     mainService.validateIfLoggedIn().then(function(response) {
      //       if(response.data = 'fail') {
      //         $state.go('login');
      //       }
      //     })
      //   }
      // }
    })

    .state('uat', {
      url: '/uat',
      templateUrl: '../features/uatSites/uatSites.html',
      controller: 'uatSitesCtrl',
      // resolve: {
      //   user: function($rootScope, $state, mainService) {
      //     mainService.validateIfLoggedIn().then(function(response) {
      //       if(response.data === 'fail') {
      //         $state.go('login');
      //       }
      //     })
      //   }
      // }
    })

    $urlRouterProvider.otherwise('/login');

}); //end
