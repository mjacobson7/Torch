angular.module('myApp')
  .controller('adminCtrl', function($rootScope, $scope, $state, mainService) {

    $scope.user = $rootScope.user;

    var getUsers = function() {
      mainService.getUsers().then(function(response) {
        $scope.accounts = response;
      })
    }

    getUsers();

    $scope.deleteUser = function(id, admin) {
      if(admin) {
          Materialize.toast('You cannot delete an Admin account!', 4000, 'rounded');
      } else {
      mainService.deleteUser(id).then(function(response) {
        Materialize.toast('User deleted!', 4000, 'rounded');
        getUsers();
        })
      }
    };



  }); //end
