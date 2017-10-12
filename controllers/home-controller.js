   myapp.controller('home-controller', ['$scope','$location', '$route', '$window', '$rootScope',
        function ($scope, $location, $route, $window, $rootScope) {
            console.log("got to Home Controller");
          
             $rootScope.linux = false;
             $scope.pageClass = "containerHome";
   }]);