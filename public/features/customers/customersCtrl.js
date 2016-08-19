angular.module('myApp')
  .controller('customersCtrl', function($rootScope, $scope, mainService, $state) {

        console.log($rootScope.user);

        $scope.sortType = 'name';
        $scope.sortReverse = false;
        $scope.searchCompany = '';


        $scope.customers = [
          { name: "Toyota", prod: "http://torchlms.com", uat: "http://.torchlms.com"},
          { name: "Hyundai of Canada", prod: "https://torchlms.com/login/default-view?forceManual=true", uat: "https://torchlms.com/login/default-view?forceManual=true"},
          { name: "Devereux", prod: "https://torchlms.com/login/defaultView", uat: "https://torchlms.com/login/defaultView"},
          { name: "Google", prod: "https://google.torchlms.com/login/defaultView", uat: "https://google-uat.torchlms.com/login/defaultView"},
          { name: "Apple", prod: "https://apple.torchlms.com/login/defaultView", uat: "https://apple-uat.torchlms.com/login/defaultView"},
          { name: "Facebook", prod: "https://facebook.torchlms.com/login/defaultView", uat: "https://facebook-uat.torchlms.com/login/defaultView"},
          { name: "Dev Mountain", prod: "https://devmountain.torchlms.com/login/defaultView", uat: "https://devmountain-uat.torchlms.com/login/defaultView"}
        ]

  }); //end
