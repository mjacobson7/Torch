angular.module('myApp')
  .controller('userProfileCtrl', function($scope, $state, mainService) {


    var validateIfLoggedIn = function() {
      mainService.validateIfLoggedIn().then(function(response) {
        $scope.user = response.data;
      })
    }

    validateIfLoggedIn();

    $scope.updateProfile = function(password1, password2) {
      if(password1 === password2) {
        var user = {
          password: password1,
          id: $scope.user._id
        }
        mainService.updateProfile(user).then(function(response) {
          $scope.password = !$scope.password;
          Materialize.toast('Password updated successfully!', 4000, 'rounded');
      })
    } else {
      Materialize.toast('Passwords don\'t match!', 4000, 'rounded');
    }
  };


  }); //end
