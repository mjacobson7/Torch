angular.module('myApp')
  .controller('loginCtrl', function($rootScope, $scope, mainService, $state) {

    $scope.validateIfLoggedIn = function() {
      mainService.validateIfLoggedIn().then(function(response) {
        if(!response.data.passport.user) {
          $state.go('login');
        }
      })
    };

    $scope.validateIfLoggedIn();

    $scope.login = function(email, password) {
      var user = {
        email: email,
        password: password
      };
      mainService.login(user).then(function(response) {
        $scope.email = '';
        $scope.password = '';
        if(response.data !== 'Failed to authenticate') {
          $rootScope.user = response.data;
          $state.go('customers');
        } else {
          // TODO: Add an failed login alert
        }
      });
    };

  }); //end
