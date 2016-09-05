angular.module('myApp')
  .controller('newUserCtrl', function($rootScope, $scope, mainService, $state) {

    $scope.createUser = function(firstName, lastName, email, password1, password2, admin) {
      var setAdmin;
      if(!admin) {
        setAdmin = false;
      } else {
        setAdmin = true;
      };
      if(!firstName && !lastName && !email && !password1 && !password2) {
        Materialize.toast('Please fill out form!', 4000, 'rounded');
      }  else if(password1 !== password2) {
        Materialize.toast('Passwords do not match!', 4000, 'rounded');
      } else if(!firstName) {
        Materialize.toast('Please enter a first name!', 4000, 'rounded');
      } else if(!lastName) {
        Materialize.toast('Please enter a last name!', 4000, 'rounded');
      } else if(!email) {
        Materialize.toast('Please enter a valid email!', 4000, 'rounded');
      } else if(!password1 || !password2) {
        Materialize.toast('Please enter a password!', 4000, 'rounded');
      } else {
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
          $state.go('admin');
        })

      }
  }


  }); //end
