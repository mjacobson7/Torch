angular.module('myApp')
  .controller('adminCtrl', function($rootScope, $scope, $state, mainService) {

    $scope.user = $rootScope.user;
    //
    // var answer
    //
    // var validateIfLoggedIn = function() {
    //   mainService.validateIfLoggedIn().then(function(response) {
    //     if(response.data.admin) {
    //       answer = true;
    //     } else {
    //       answer = false;
    //     }
    //   })
    // }
    //
    // validateIfLoggedIn();
    //
    // var isAdmin = function() {
    //   return answer;
    // };
    //
    // isAdmin();

    var getUsers = function() {
      mainService.getUsers().then(function(response) {
        $scope.accounts = response;
      })
    }

    getUsers();

    $scope.createUser = function(firstName, lastName, email, password1, password2, admin) {
      var setAdmin;
      if(!admin) {
        setAdmin = false;
      } else {
        setAdmin = true;
      }
      if(password1 === password2) {
      var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password1,
        admin: setAdmin
      };
      mainService.createUser(user).then(function(response) {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
        $scope.password1 = "";
        $scope.password2 = "";
        $scope.admin = "";
        Materialize.toast('User added successfully!', 4000);
        getUsers();
      })
    }
    }

  }); //end
