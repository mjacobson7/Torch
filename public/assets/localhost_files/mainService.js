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


  }); //end
