angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: '../features/home/home.html',
      controller: 'homeCtrl',
      resolve: {
        nav: function($state, mainService) {
          mainService.validateIfLoggedIn().then(function(response) {
            if(!response.data._id) {
              $state.go('login');
            } else {
              $state.go('customers');
            }
          })
        }
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: '../features/login/login.html',
      controller: 'loginCtrl',
      resolve: {
        user: function($state, mainService) {
          mainService.validateIfLoggedIn().then(function(response) {
            if(response.data._id) {
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
            if(!response.data._id) {
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
            if(!response.data._id) {
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
            if(!response.data._id) {
              $state.go('login');
            }
          })
        }
      }
    })

    .state('admin', {
      url: '/admin',
      templateUrl: '../features/admin/admin.html',
      controller: 'adminCtrl',
      resolve: {
        user: function($rootScope, $state, mainService) {
          mainService.validateIfLoggedIn().then(function(response) {
            if(!response.data._id || !$rootScope.user.admin) {
              $state.go('home');
            }
          })
        }
      }
    })



    $urlRouterProvider.otherwise('/home');

}); //end
