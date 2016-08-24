angular.module('myApp')
  .controller('userProfileCtrl', function($rootScope, $scope, $state, mainService) {

    $scope.user = $rootScope.user;

    $scope.editProfile = function() {
      $state.go('updateProfile');
    };

    var validateIfLoggedIn = function() {
      mainService.validateIfLoggedIn().then(function(response) {
        console.log(response.data);
        $scope.user = response.data;
      })
    }

    validateIfLoggedIn();


  }); //end
