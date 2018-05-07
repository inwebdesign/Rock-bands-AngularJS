// creating main controller
angular.module('mainController', [])
.controller('mainCtrl', function($scope,$http){
	$scope.allBands = [];
	$scope.bandDetailInfo = {};
	$http({
		// using get method to pick data from external web site
		method: "get",
		url: "https://danilovesovic.github.io/bands/bands.json"
	})
	.then(function(result){
		// converting data to global variable
		$scope.allBands = result.data;
	},function(error){
		console.log(error);
	})
	$scope.display = function(band){
		$scope.bandDetailInfo = band;
	}
})