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
    };

    this.getProfile = function() {
      return $http ({
        method: 'GET',
        url: '/auth/getprofile'
      }).then(function(response) {
        return response;
      })
    };

    this.createUser = function(user) {
      return $http ({
        method: 'POST',
        url: '/auth/signup',
        data: user
      }).then(function(response) {
        return response;
      })
    }

    this.getUsers = function() {
      return $http ({
        method: 'GET',
        url: '/api/getusers'
      }).then(function(response) {
        return response.data;
      })
    }

  }); //end
