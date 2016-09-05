
'use strict';

    var myapp = angular.module('myWebApp', ['ngRoute', 'ngMaterial', 'ngAnimate','ui.bootstrap']);


    myapp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: '/components/home.html',
                    controller: 'home-controller'
                }).
                 when('/contact', {
                    templateUrl: '/components/contact.html',
                    controller: 'misc-controller'
                }).
                 when('/resume', {
                    templateUrl: '/components/resume.html',
                    controller: 'resume-controller'
                }).
                 when('/projects', {
                    templateUrl: '/components/projects.html',
                    controller: 'projects-controller'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);



    myapp.controller('MainController', ['$scope', '$route', '$http', '$window', '$location',
        function ($scope, $route, $http, $window, $location) {
            console.log("got to Controller");

            $scope.first_name = 'Tuan Anh Tran Caraballo';
            $scope.main = {};
            $scope.main.title = 'Tuan Anh Tran Caraballo';

            $scope.pageClass = "containerHome";

            $scope.myTwitter = "https://www.twitter.com/tuan26062";
            $scope.myGitHub = "https://www.github.com/tuancaraballo";

            var loc = window.location.pathname;
            console.log("Current directory " + loc);

            var previousButton = "homeButton";
            var currentButton = "homeButton";

            $scope.homeButton = false;

       var changePreviousElementColor = function(){
         var myButton1 = angular.element(document.querySelector('#'+previousButton) );
         myButton1.removeClass('buttons_style2');
         myButton1.addClass('buttons_style');
       }

       var changeCurrentElementColor = function(){
         var myButton2 = angular.element(document.querySelector('#'+currentButton) );
         myButton2.removeClass('buttons_style');
         myButton2.addClass('buttons_style2');
       }


        
      $scope.showProjects = function(){
        $location.path('/projects');
        currentButton = 'projectsButton';
        changePreviousElementColor();
        changeCurrentElementColor();
        previousButton = 'projectsButton';
      } 
       $scope.showHome = function(){
        $location.path('/home');
        currentButton = 'homeButton';
         changePreviousElementColor();
          changeCurrentElementColor();
        previousButton = 'homeButton';
      }  
       $scope.showResume = function(){
        $location.path('/resume');
        currentButton = 'resumeButton';
         changePreviousElementColor();
          changeCurrentElementColor();
        previousButton = 'resumeButton';
      }  
       $scope.showSkills = function(){
        $location.path('/contact');
        currentButton = 'contactButton';
        changePreviousElementColor();
         changeCurrentElementColor();
        previousButton = 'contactButton';
      }  

      
      
       
       

}]);

    myapp.controller('home-controller', ['$scope','$location', '$route', '$window',
        function ($scope, $location, $route, $window) {
            console.log("got to Home Controller");
            $scope.pageClass = 'containerHome';
                 
   }]);

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

     

     myapp.controller('misc-controller', ['$scope','$location', '$route', '$window',
        function ($scope, $location, $route, $window) {
            console.log("got to project Controller");




                 
}]);



