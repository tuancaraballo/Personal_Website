
'use strict';

    var myapp = angular.module('myWebApp', ['ngRoute', 'ngMaterial']);



/*
 when('/activityFeed', {
                    templateUrl: 'components/activity-feed/activityFeed.html',
                    controller: 'activityFeed-Controller'
                }).

*/


    myapp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: '/components/home.html',
                }).
                 when('/contact', {
                    templateUrl: '/components/contact.html',
                }).
                 when('/resume', {
                    templateUrl: '/components/resume.html',
                }).
                 when('/projects', {
                    templateUrl: '/components/projects.html',
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);

    myapp.controller('MainController', ['$scope', '$route', '$http', '$window', '$location',
        function ($scope, $route, $http, $window, $location) {
            console.log("got to Controller");

            $scope.first_name = 'Nicola Rider';
            $scope.main = {};
            $scope.main.title = 'Nicola Rider';
            var loc = window.location.pathname;
            console.log("Current directory " + loc);

            var previousButton = "homeButton";
            var currentButton = "homeButton";

            $scope.homeButton = false;

       var changePreviousElementColor = function(){
         var myButton1 = angular.element(document.querySelector('#'+previousButton) );
         myButton1.removeClass('buttons_style2');
         myButton1.addClass('buttons_style');
         // myButton.css('color','#4D4D4D');
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
       $scope.showContact = function(){
        $location.path('/contact');
        currentButton = 'contactButton';
        changePreviousElementColor();
         changeCurrentElementColor();
        previousButton = 'contactButton';
      }  
       
       

}]);

   

    myapp.controller('project-controller', ['$scope','$location', '$route', '$window',
        function ($scope, $location, $route, $window) {
            console.log("got to project Controller");
                 
}]);
     myapp.controller('contact-controller', ['$scope','$location', '$route', '$window',
        function ($scope, $location, $route, $window) {
            console.log("got to project Controller");
                 
}]);



