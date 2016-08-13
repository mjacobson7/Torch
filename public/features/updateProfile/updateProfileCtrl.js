angular.module('myApp')
  .controller('updateProfileCtrl', function($rootScope, $scope, $state, mainService) {

    $scope.user = $rootScope.user;

    $scope.cancelProfileUpdate = function() {
      $state.go('userProfile');
    };

    $scope.updateProfile = function(firstName, lastName, email, password1, password2, id) {
      if(password1 === password2) {
        var user = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password1,
          id: id
        }
        mainService.updateProfile(user).then(function(response) {
          console.log(response);
      })
    }
  };


  }); //end
