angular.module('myApp')
  .controller('custProfileCtrl', function($scope, mainService) {

        $scope.sortType = 'name';
        $scope.sortReverse = false;
        $scope.searchCompany = '';


        $scope.customers = [
          { name: "Toyota", status: "Current Customer (active)", prod: "http://toyota.torchlms.com", uat: "http://toyota-uat.torchlms.com"},
          { name: "Hyundai of Canada", status: "Current Customer (active)", prod: "https://hyundai-canada.torchlms.com/login/default-view?forceManual=true", uat: "https://hyundai-canada-uat.torchlms.com/login/default-view?forceManual=true"},
          { name: "Devereux", status: "Current Customer (active)", prod: "https://devereux.torchlms.com/login/defaultView", uat: "https://devereux-uat.torchlms.com/login/defaultView"},
          { name: "Google", status: "Current Customer (active)", prod: "https://google.torchlms.com/login/defaultView", uat: "https://google-uat.torchlms.com/login/defaultView"},
          { name: "Apple", status: "Current Customer (active)", prod: "https://apple.torchlms.com/login/defaultView", uat: "https://apple-uat.torchlms.com/login/defaultView"},
          { name: "Facebook", status: "Current Customer (active)", prod: "https://facebook.torchlms.com/login/defaultView", uat: "https://facebook-uat.torchlms.com/login/defaultView"},
          { name: "Dev Mountain", status: "Current Customer (active)", prod: "https://devmountain.torchlms.com/login/defaultView", uat: "https://devmountain-uat.torchlms.com/login/defaultView"}
        ]

  }); //end
