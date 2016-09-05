   myapp.controller('home-controller', ['$scope','$location', '$route', '$window',
        function ($scope, $location, $route, $window) {
            console.log("got to Home Controller");
            $scope.pageClass = 'containerHome';
                 
   }]);