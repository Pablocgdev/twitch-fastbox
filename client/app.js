angular.module('ninioTwitch', []).controller('ninioCtrl', function ($scope, ninioFactory) {

	
	ninioFactory.getStreams().success(function (streams) {
		$scope.streams = streams.streams;
		console.log(streams);
	})

	$scope.name = "Hola ninio"; 
})