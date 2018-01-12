var myApp = angular.module('myApp',[]);
myApp.controller('appCtrl',['$scope', '$http',
	function($scope, $http){		
		console.log('Hola Controlador');
/*
	$http.get('/listaSalas').success(function(response){
		console.log('get funciona en controller')
		//$scope.lista = response;
	});
*/

	$http.get('/listaSalas')
  		.then(function (response) {
    			console.log('get funciona en controller', response.data);
    	$scope.lista = response.data;	
	});		

}]);

