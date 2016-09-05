    myapp.controller('projects-controller', ['$scope','$location', '$route', '$window',
        function ($scope, $location, $route, $window) {
            console.log("got to Project Controller");


            $scope.pageClass = 'containerProjects';
            $scope.myInterval = 10000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
  
            var slides = $scope.slides = [];
            var currIndex = 0;


        $scope.addSlide = function() {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: 'images/pup' + currIndex+ '.png',
                text: ['Puppy1','Puppy2','Puppy3'][slides.length % 3],
                id: currIndex++
            });
        };
        
        for (var i = 0; i < 3; i++) {
            $scope.addSlide();
        }
                 
    }]);