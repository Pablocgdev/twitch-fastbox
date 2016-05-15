var streamsFactory = function ($http) {

	var factory = {};
	var url ="https://api.twitch.tv/kraken/streams/";

	factory.getStreams = function () {

		var zz = $http.get(url);
		return zz;
	}

	return factory;
	}
	 

angular.module('ninioTwitch').factory('ninioFactory', streamsFactory);