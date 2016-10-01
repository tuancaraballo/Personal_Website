    myapp.controller('projects-controller', ['$scope','$location', '$route', '$window', '$rootScope',
        function ($scope, $location, $route, $window, $rootScope) {
            console.log("got to Project Controller");

            $rootScope.linux = false;
            $scope.pageClass = '.containerProjects';
           

           
            $scope.unagiInterval = 10000;
            $scope.unagiNoWrapSlides = false;          
            $scope.unagiActive = 0;
  

  //--- Heap Slides for carousel  --- 
            $scope.heapInterval = 10000;
            $scope.heapNoWrapSlides = false;
            $scope.heapActive = 0;
            var heapSlides = $scope.heapSlides = [];
            var heapIndex = 0;


            $scope.addHeap = function() {
                 var newWidth = 600 + heapSlides.length + 1;
                 heapSlides.push({
                     image: 'images/heap' + heapIndex+ '.png',
                 // text: ['Puppy1','Puppy2','Puppy3'][slides.length % 3],
                     id: heapIndex++
                 });
            };

            for (var i = 0; i < 3; i++) {
                $scope.addHeap();
            }


 //--- Unagi Slides for carousel ---
           $scope.unagiInterval = 10000;
           $scope.unagiNoWrapSlides = false;          
           $scope.unagiActive = 0;
           var unagiSlides = $scope.unagiSlides = [];
           var unagiIndex = 0;


            $scope.addUnagi = function() {
                 var newWidth = 600 + unagiSlides.length + 1;
                 unagiSlides.push({
                     image: 'images/unagi' + unagiIndex+ '.png',
                 // text: ['Puppy1','Puppy2','Puppy3'][slides.length % 3],
                     id: unagiIndex++
                 });
            };  

            for (var i = 0; i < 7; i++) {
                $scope.addUnagi();
            }         

        // currIndex

        // $scope.addUnagi = function() {
        //     var newWidth = 600 + slides.length + 1;
        //     slides.push({
        //         image: 'images/heap' + currIndex+ '.png',
        //         // text: ['Puppy1','Puppy2','Puppy3'][slides.length % 3],
        //         id: currIndex++
        //     });
        // };


        

        
                 
    }]);