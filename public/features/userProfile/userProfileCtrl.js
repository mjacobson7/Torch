angular.module('myApp')
  .controller('userProfileCtrl', function($rootScope, $scope, $state, mainService) {

    $scope.user = $rootScope.user;


    var getProfile = function() {
      mainService.getProfile().then(function(response) {
        $scope.user = response.data;
      })
    }

    getProfile();

    $scope.updateProfile = function(password1, password2) {
      if(password1 === password2) {
        var user = {
          password: password1,
          id: $rootScope.user._id
        }
        mainService.updateProfile(user).then(function(response) {

      })
    }
  };


  }); //end
