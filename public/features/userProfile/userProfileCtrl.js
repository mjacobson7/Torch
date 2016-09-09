angular.module('myApp')
  .controller('userProfileCtrl', function($rootScope, $scope, $state, mainService) {


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
          id: $rootScope.user._id
        }
        mainService.updateProfile(user).then(function(response) {

      })
    } else {

    }
  };


  }); //end
