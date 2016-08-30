angular.module('myApp')
  .controller('adminCtrl', function($rootScope, $scope, $state, mainService) {

    $scope.user = $rootScope.user;

    var validateIfLoggedIn = function() {
      mainService.validateIfLoggedIn().then(function(response) {
        $rootScope.user = response.data;
      })
    }

    validateIfLoggedIn();

    var isAdmin = function() {
      if(!$rootScope.user.admin) {
      $state.go('home');
    }
    };

    isAdmin();

    var getUsers = function() {
      mainService.getUsers().then(function(response) {
        $scope.accounts = response;
      })
    }

    getUsers();

    $scope.createUser = function(firstName, lastName, email, password1, password2, admin) {
      if(admin === 'undefined') {
        admin = false;
      };
      if(password1 === password2) {
      var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password1,
        admin: admin
      };
      mainService.createUser(user).then(function(response) {

      })
    }
    }

  }); //end
