angular.module('myApp')
  .controller('customersCtrl', function($rootScope, $scope, mainService, $state) {

        $scope.sortType = 'name';
        $scope.sortReverse = false;
        $scope.searchCompany = '';


        $scope.customers = [
          { name: "Toyota", prod: "www.toyota.torchlms.com", uat: "www.toyota-uat.torchlms.com"},
          { name: "Hyundai of Canada", prod: "torchlms.com", uat: "torchlms.com"},
          { name: "Devereux", prod: "torchlms.com", uat: "torchlms.com"},
          { name: "Google", prod: "google.torchlms.com", uat: "google-uat.torchlms.com"},
          { name: "Apple", prod: "apple.torchlms.com", uat: "apple-uat.torchlms.com"},
          { name: "Facebook", prod: "facebook.torchlms.com", uat: "facebook-uat.torchlms.com"},
          { name: "Dev Mountain", prod: "devmountain.torchlms.com", uat: "devmountain-uat.torchlms.com"}
        ]

        // var validateIfLoggedIn = function() {
        //   mainService.validateIfLoggedIn().then(function(response) {
        //     console.log(response);
        //   }).catch(function(err) {
        //         console.log(err);
        //       })
        // }
        //
        // validateIfLoggedIn();



  }); //end
