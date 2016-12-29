angular.module('myApp')
  .controller('customersCtrl', function($rootScope, $scope, mainService, $state) {

        $scope.sortType = 'name';
        $scope.sortReverse = false;
        $scope.searchCompany = '';


        $scope.customers = [
          { name: "Walmart", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Exxon Mobil", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Apple", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Berkshire Hathaway", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "McKesson", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "UnitedHealth Group", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "CVS Health", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "General Motors", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Ford Motor", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "AT&T", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "General Electric", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "AmerisourceBergen", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Verizon", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Chevron", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Costco", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Fannie Mae", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Kroger", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Amazon.com", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Walgreens", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "HP", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "J.P. Morgan Chase", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Boeing", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Microsoft", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Home Depot", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Citigroup", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "IBM", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Alphabet", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Comcast", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Target", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "MetLife", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Freddie Mac", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "PepsiCo", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Aetna", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Lowe’s", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "UPS", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "Disney", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
          { name: "FedEx", prod: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", uat: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}


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
