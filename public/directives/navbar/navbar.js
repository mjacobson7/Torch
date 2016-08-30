angular.module('myApp')
  .directive('navBarDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './directives/navbar/navbar.html',
      scope: {},
      controller: function($rootScope, $scope, $state, mainService) {
        $( document ).ready(function() {
          $(".dropdown-button").dropdown();
          $(".button-collapse").sideNav();
        });

        var validateIfLoggedIn = function() {
          mainService.validateIfLoggedIn().then(function(response) {
            $rootScope.user = response.data;
          })
        }

        validateIfLoggedIn();

        $scope.isAdmin = function() {
          if($rootScope.user.admin) {
          return true;
        } else {
          return false;
        }
        };




    }
  };
  }); //end
