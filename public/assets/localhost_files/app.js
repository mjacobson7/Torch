angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../features/home/home.html',
      controller: 'homeCtrl',
      resolve: {
        user: function($rootScope) {
          if(!$rootScope.user) {
            alert('There is no user');
            $state.go('login');
          }
        }
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: '../features/login/login.html',
      controller: 'loginCtrl'
    })

    .state('userProfile', {
      url: '/userprofile',
      templateUrl: '../features/userProfile/userProfile.html',
      controller: 'userProfileCtrl'
    })

    .state('editProfile', {
      url: '/editprofile',
      templateUrl: '../features/userProfileEdit/userProfileEdit.html',
      controller: 'userProfileEditCtrl'
    })

    .state('custProfile', {
      url: '/custprofile',
      templateUrl: '../features/custprofile/custProfile.html',
      controller: 'custProfileCtrl'
    })

    .state('prod', {
      url: '/prod',
      templateUrl: '../features/prodSites/prodSites.html',
      controller: 'prodSitesCtrl'
    })

    .state('uat', {
      url: '/uat',
      templateUrl: '../features/uatSites/uatSites.html',
      controller: 'uatSitesCtrl'
    })

    $urlRouterProvider.otherwise('/home');

}); //end
