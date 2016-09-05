
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

     myapp.controller('resume-controller', ['$scope','$location', '$route', '$window',
        function ($scope, $location, $route, $window) {
            console.log("got to Resume Controller");

            var jobsList =[
                    {
                              title: "Home Depot",
                        description: "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself."
                    },
                    {
                              title: "Tutor",
                        description: "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself."
                    },
                    {
                              title: "Medical School",
                        description: "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself."
                    }

               ];

            var educationList= [
                    {
                             title: "Stanford University",
                       description:  'Stanford University --- 2018'
                    }
            ];

            var publicServiceList = [
                 {
                             title: "Cuba Emprende",
                       description: "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself."
                },
                 {
                             title: "Uniting Neighborhoods",
                       description: "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself."
                }

            ];  


               $scope.resumeDataSet = [
                    {
                        sectionTitle: "Education",
                                data: educationList

                    },
                    {
                        sectionTitle: "Work Experience",
                                data: jobsList

                    },
                    {
                        sectionTitle: "Public Service",
                                data: publicServiceList
                    }

               ];

               $scope.skills = ['Android Development', 'Responsive Design','Web Development', ' Object Oriented Programming ', 'Angular Material',
               'Bootstrap', 'NodeJS', 'ExpressJS', 'MongoDB'
               ];



               

            
                 
}]);

     myapp.controller('contact-controller', ['$scope','$location', '$route', '$window',
        function ($scope, $location, $route, $window) {
            console.log("got to project Controller");




                 
}]);



