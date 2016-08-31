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

        // var answer

        var validateIfLoggedIn = function() {
          mainService.validateIfLoggedIn().then(function(response) {
            if(response.data.admin) {
              $scope.isAdmin = true;
            } else {
              $scope.isAdmin = false;
            }
          })
        }

        validateIfLoggedIn();



    }
  };
  }); //end
