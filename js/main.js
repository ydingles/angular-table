// Create an angular application called "sortApp"
var sortApp = angular.module('sortApp', []);


// Define a controller "mainController" for you application, 
// making sure to pass in both the $scope and $http variables
sortApp.controller('mainController', function($scope, $http) {
    $http.get('data/salaries.json').then(function(response) {
    // Response parameter will be an object that has a 'data' key
    $scope.data = response.data
    })
})
	// Use and $http.get request to get the salary data
	
		// Set $scope.data equal to the data returned in your results
