
'use strict';

    var myapp = angular.module('myWebApp', ['ngRoute', 'ngMaterial', 'ngAnimate','ui.bootstrap']);


    myapp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/entrance', {
                    templateUrl: '/components/entrance.html',
                    controller: 'entrance-controller'
                }).
                when('/home', {
                    templateUrl: '/components/home.html',
                    controller: 'home-controller'
                }).
                 when('/about', {
                    templateUrl: '/components/about.html',
                    controller: 'about-controller'
                }).
                 when('/resume', {
                    templateUrl: '/components/resume.html',
                    controller: 'resume-controller'
                }).
                 when('/projects', {
                    templateUrl: '/components/projects.html',
                    controller: 'projects-controller'
                }).
                when('/resumePDF', {
                    templateUrl: '/components/resume.pdf'
                }).             
                otherwise({
                    redirectTo: '/entrance'
                });
        }]);



    myapp.controller('MainController', ['$scope', '$route', '$http', '$window', '$location', '$rootScope',
        function ($scope, $route, $http, $window, $location, $rootScope) {
            console.log("got to Controller");

            $scope.first_name = 'Tuan Anh Tran Caraballo';
            $scope.main = {};
            $scope.main.title = 'Tuan Anh Tran Caraballo';


            $rootScope.linux = true;

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




     





