myapp.controller('resume-controller', ['$scope','$location', '$route', '$window', '$rootScope',
  function ($scope, $location, $route, $window, $rootScope) {
    console.log("got to Resume Controller");
    $rootScope.linux = false;
    $scope.pageClass = 'containerResume';
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
        description:  'B.S, Computer Science  --- 2018'
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

    $scope.skills = [
       {
               title: 'Android Development',
                 url: '/icons/android15.png' 
       },
       {
               title: 'Responsive Design',
                 url: '/icons/responsive.png' 
        },
       {
               title: 'HTML',
                 url: '/icons/html.png' 
        },
        {
               title: 'CSS',
                 url: '/icons/css.png' 
        },
        {
               title: 'Web Development',
                 url: '/icons/web.png' 
         },
        {
               title: 'Object Oriented Programming',
                 url: '/icons/oop.png' 
        },
        {
               title: 'Angular',
                 url: '/icons/angularjs.png' 
         },
         {
               title: 'Bootstrap',
                 url: '/icons/bootstrap.png' 
          },
          {
               title: 'NodeJS',
                 url: '/icons/nodejs.png' 
         },
         {
               title: 'MongoDB',
                 url: '/icons/mongodb.png' 
          }
      ];


    $scope.languages = [
      {
               title: 'C',
                 url: '/icons/c.png' 
      },
      {
               title: 'C++',
                 url: '/icons/cpp.png' 
      },
      {
               title: 'Javascript',
                 url: '/icons/javascript.png' 
      },
      {
               title: 'Java',
                 url: '/icons/java.png' 
      },
      {
               title: 'SQL',
                 url: '/icons/SQL.png' 
      }
   ];                 
}]);