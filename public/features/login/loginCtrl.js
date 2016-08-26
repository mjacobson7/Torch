angular.module('myApp')
  .controller('loginCtrl', function($rootScope, $scope, mainService, $state) {

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
          Materialize.toast('Invalid Credentials!', 4000)
        }
      });
    };

    $scope.tooBad = function() {
      Materialize.toast('Too bad! This feature hasn\'t been set up yet!', 4000)
    }

  }); //end
