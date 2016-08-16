angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

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

    .state('customers', {
      url: '/customers',
      templateUrl: '../features/customers/customers.html',
      controller: 'customersCtrl',
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
