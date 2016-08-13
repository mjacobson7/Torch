angular.module('myApp')
  .directive('navBarDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './directives/navbar/navbar.html',
      scope: {},
      controller: function($rootScope, $scope, $state) {
        $( document ).ready(function() {
          $(".dropdown-button").dropdown();
          $(".button-collapse").sideNav();
        });
    }
  };
  }); //end
