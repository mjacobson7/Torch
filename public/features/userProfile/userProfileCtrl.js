angular.module('myApp')
  .controller('userProfileCtrl', function($rootScope, $scope, $state, mainService) {

    $scope.user = $rootScope.user;

    $scope.editProfile = function() {
      $state.go('updateProfile');
    };

  }); //end
