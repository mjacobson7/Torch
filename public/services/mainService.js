angular.module('myApp')
  .service('mainService', function($http) {

    this.login = function(user) {
      return $http ({
        method: 'POST',
        url: '/auth/local',
        data: user
      }).then(function(response) {
        return response;
      });
    };

    this.validateIfLoggedIn = function() {
      return $http ({
        method: 'GET',
        url: '/auth/validateIfLoggedIn'
      }).then(function(response) {
        return response;
      })
    };

    this.updateProfile = function(user) {
      return $http ({
        method: 'PUT',
        url: '/api/updateprofile',
        data: user
      }).then(function(response) {
        return response;
      })
    }


  }); //end
