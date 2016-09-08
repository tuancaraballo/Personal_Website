myapp.controller('entrance-controller', ['$scope','$location', '$route', '$window', '$rootScope',
        function ($scope, $location, $route, $window, $rootScope) {
            console.log("got to project Controller");
  			$scope.pageClass = 'containerAbout';
             console.log("the command: " +  $scope.command);
           
            $scope.route = function(event){

            	 if(event.keyCode == 13) {  
            	 	console.log("Then event was enter");
            	 	console.log("command was " + $scope.command);
            	 	if($scope.command == "cd mysite"){
            			console.log("The command is: " + $scope.command);        			
     					console.log("About-controller, linux should be true " + $scope.linux);
            			$rootScope.linux = false;
            			$location.path('/home');
            		}else if($scope.command == "cat resume") {
            			var myPdfUrl = '/components/resume.pdf';
						$window.open(myPdfUrl); 
						$scope.incorrectInput = false;        		
            		}else{
            			var textElement = angular.element( document.querySelector( '#textarea' ));
            			textElement.value= '';
            			$scope.incorrectInput = true;
            		}
                 }else{
                 	console.log("The event was "+event);
                 }

            }

                 
}]);