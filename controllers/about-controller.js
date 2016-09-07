myapp.controller('about-controller', ['$scope','$location', '$route', '$window',
        function ($scope, $location, $route, $window) {
            console.log("got to project Controller");

             // $scope.command = "belogni";

             console.log("the command: " +  $scope.command);
             
            $scope.route = function(event){

            	 if(event.keyCode == 13) {  
            	 	console.log("Then event was enter");
            	 	console.log("command was " + $scope.command);
            	 	if($scope.command == "cd mywebsite"){
            			console.log("The command is: " + $scope.command);
            			$location.path('/home');
            		}else if($scope.command == "cat resume") {
            			var myPdfUrl = '/components/resume.pdf';
						$window.open(myPdfUrl);
            		
            		}
                 }else{
                 	console.log("The event was "+event);
                 }

            }

                 
}]);