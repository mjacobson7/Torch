angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: '../features/home/home.html',
      controller: 'homeCtrl',
      resolve: {
        user: function(mainService, $state) {
          mainService.validateIfLoggedIn().then(function(response) {
            console.table(response);
            if(response.data._id) {
              $state.go('customers');
            } else {
              $state.go('login');
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
        user: function(mainService, $state) {
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
        user: function(mainService, $state) {
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
        user: function(mainService, $state) {
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
        user: function(mainService, $state) {
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
        user: function(mainService, $state) {
          mainService.validateIfLoggedIn().then(function(response) {
            if(!response.data.admin) {
              $state.go('login');
            }
          })
        }
      }
    })


    .state('newUser', {
      url: '/newuser',
      templateUrl: '../features/newUser/newUser.html',
      controller: 'newUserCtrl',
      resolve: {
        user: function(mainService, $state) {
          mainService.validateIfLoggedIn().then(function(response) {
            if(!response.data.admin) {
              $state.go('login');
            }
          })
        }
      }
    })

    $urlRouterProvider.otherwise('/home');

}); //end
