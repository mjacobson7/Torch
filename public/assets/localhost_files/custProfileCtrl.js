angular.module('myApp')
  .controller('custProfileCtrl', function($scope, mainService) {

        $scope.sortType = 'name';
        $scope.sortReverse = false;
        $scope.searchCompany = '';


        $scope.customers = [
          { name: "Toyota", status: "Current Customer (active)", prod: "http://toyota.torchlms.com", uat: "http://toyota-uat.torchlms.com"},
          { name: "Hyundai of Canada", status: "Current Customer (active)", prod: "https://hyundai-canada.torchlms.com/login/default-view?forceManual=true", uat: "https://hyundai-canada-uat.torchlms.com/login/default-view?forceManual=true"},
          { name: "Devereux", status: "Current Customer (active)", prod: "https://devereux.torchlms.com/login/defaultView", uat: "https://devereux-uat.torchlms.com/login/defaultView"}
        ]

  }); //end
