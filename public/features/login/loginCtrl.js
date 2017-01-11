angular.module('myApp')
  .controller('loginCtrl', function($scope, mainService, $state) {

    $scope.login = function(user) {
      mainService.login(user).then(function(response) {
        if(response.data !== 'Failed to authenticate') {
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
