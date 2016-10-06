myapp.controller('resume-controller', ['$scope','$location', '$route', '$window', '$rootScope',
  function ($scope, $location, $route, $window, $rootScope) {
    console.log("got to Resume Controller");
    $rootScope.linux = false;
    $scope.pageClass = 'containerResume';
    var jobsList = [
      {
              title: "Admission Associate, Stanford Admissions Office, CA",
             period: "June 2014-present",
        description: "Present Stanford admission information to audiences of 90-120. Worked on projects for multiple teams, including collaborating to construct admission case studies while assisting with the training of new Admission Associates"
        
      },
      {
              title: "Research Intern, Stanford School of Medicine, CA",
             period: "January 2014-Sept 2014",
        description: "Contributed to the development of a collagen patch containing Follistatin-like 1 (FSTL1) that helped regenerate cardiomyocytes upon induced heart attack. Was in charge of mice genotyping and other lab work such as media preparation and autoclave. Cultivated and thawed HEK-1 cells and cardiomyocytes."
      },
      {
              title: "Science and Spanish tutor, Mt. Hood Community College, OR",
             period: "September 2011-August 2013",
        description: "Assisted students in reviewing material and clarifying content in Chemistry, Physics, Math and Spanish."
      },
      {
              title: "Tool Rental Sales Associate, The Home Depot – Troutdale, OR",
             period: "May 2011-August 2013",
        description: "Performed cashier register transactions and maintained accurate balances, set up tool rental contracts and filed documents, cleaned and repaired power tools. Provided quality customer service: One of 15/310 employees selected for 2012 All Stars' Best Service honor. "
      },
      {
              title: "Janitor, Hadwick Insurance Company – Portland, OR",
             period: "January 2011- June 2012",
        description: "Responsible for cleaning building, removing debris, and keeping areas neat and tidy"
      },
      {
              title: "Tour Guide, Sinh Café Tourism Agency - Ho Chi Minh City, Vietnam",
             period: "February 2010- September 2010",
        description: "Led Spanish-speaking tour groups around Ho Chi Minh City to places of cultural interest."
      },
      {
              title: "Squad Leader, Tank Artillery Specialist, Cuban Armed Forces – La Havana, Cuba",
             period: "May 2008- January 2010",
        description: "As squad leader, provided mentorship and management for over 15 soldiers. • Specialized as a PKM-tank machine gunner."
      },

    ];
 
    var educationList = [
      {
              title: "Stanford University",
             period:  "2018",
        description:  "B.S, Computer Science"
      }  
    ];


    var publicServiceList = [
        {
              title: "10x10KCuba",
             period:  "January 2016 - present",
        description:  "Helping to build a lasting and mutually beneficial partnership between Stanford students and entrepreneurs in Cuba who are shaping the socio-economic landscape in the island. This partnership will encourage technical and cultural exchange, and empowers all participants to be changemakers in their societies. Our team has succesfully secured funding through Stanford School of Engineering to bring four Cuban entreprenerus to the Sillicon Valley in Winter or Spring quarter of 2017. Learn more at the bottom of the page" 
      }, 
      {
              title: "Blood Donor",
             period:  "2011 - present",
        description:  "Have Donated blood for American Red Cross and Stanford Blood Center." 
      }, 
      {
              title: "Interdisciplinary Exchange of the Americas",
             period: "Spring 2015",
        description: "IdEA sought to inspire and empower Cuban and U.S. students to learn from one another by collaborating on projects that tackled social issues in the island using technology. We officially partnered with Stanford's Haas Center for Public Service, who provided funding. After meeting with medical and educational institutions in Cuba, we were unfortunately not able to continue with our project due to the lack of support and approval from the Cuban government. Learn more at the bottom of the page."
      },
      {
              title: "Instructor at Schools Uniting Neighborhoods, Gresham Elementary School, OR",
             period: "2011-2013",
        description: "Taught low-income Latino immigrants classes including Spanish literacy, basic Computer skills, Meditation, and Math for GED-students."
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