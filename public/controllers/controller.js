var myApp = angular.module('myApp',[]);
myApp.controller('appCtrl',['$scope', '$http',
	function($scope, $http){		
		console.log('Hola Controlador');

	var refresh = function(){	
		$http.get('/listaSalas')
  			.then(function (response) {
    				console.log('get funciona en controller', response.data);
    		$scope.lista = response.data;	
    		//$scope.sala = "";
		});		
	};

	refresh();

  	$scope.addReserva = function(){
  		console.log('ingreso add', $scope.sala);
  		
  		$http.post('/listaSalas', $scope.sala)
  			.then(function(response){
  				console.log(response);
  				$scope.sala = {};
  				refresh();
  			})
  	}; 

  	$scope.remove = function(id){
  		console.log(id);
  		$http.delete('/listaSalas/' + id);
  		refresh();
  	};

  	$scope.edit = function(id){
  		console.log(id);
  		$http.get('/listaSalas/' + id)
  			.then(function(response){
  				console.log(response);
  				$scope.sala = response.data;  				
  			});  		
  	};

}]);

