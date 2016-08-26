angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: '../features/home/home.html',
      controller: 'homeCtrl',
      // resolve: {
      //   nav: function($state, mainService) {
      //     mainService.validateIfLoggedIn().then(function(response) {
      //       if(response.data.passport.user) {
      //         $state.go('customers');
      //       } else {
      //         $state.go('login');
      //       }
      //     })
      //   }
      // }
    })

    .state('login', {
      url: '/login',
      templateUrl: '../features/login/login.html',
      controller: 'loginCtrl',
      resolve: {
        user: function($state, mainService) {
          mainService.validateIfLoggedIn().then(function(response) {
            if(response.data.passport.user) {
              $state.go('customers');
            }
          })
        }
      }
    })

    .state('userProfile', {
      url: '/userprofile',
      templateUrl: '../features/userProfile/userProfile.html',
      controller: 'userProfileCtrl',
      resolve: {
        user: function($rootScope, $state, mainService) {
          mainService.validateIfLoggedIn().then(function(response) {
            if(!response.data.passport.user) {
              $state.go('login');
            }
          })
        }
      }
    })

    .state('updateProfile', {
      url: '/userprofile',
      templateUrl: '../features/updateProfile/updateProfile.html',
      controller: 'updateProfileCtrl',
      resolve: {
        user: function($rootScope, $state, mainService) {
          mainService.validateIfLoggedIn().then(function(response) {
            if(!response.data.passport.user) {
              $state.go('login');
            }
          })
        }
      }
    })

    .state('customers', {
      url: '/customers',
      templateUrl: '../features/customers/customers.html',
      controller: 'customersCtrl',
      resolve: {
        user: function($rootScope, $state, mainService) {
          mainService.validateIfLoggedIn().then(function(response) {
            if(!response.data.passport.user) {
              $state.go('login');
            }
          })
        }
      }
    })



    $urlRouterProvider.otherwise('/home');

}); //end
