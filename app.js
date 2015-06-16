var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', function($scope){
	console.log('hi there');
	$scope.submit = function(){
		$scope.messages.push({
			author: $scope.author,
			body: $scope.content
		});
		$scope.author = '';
		$scope.content = ''
	}
	$scope.messages = [
		{
			author: 'red',
			body: 'words words words words words words'
		}
	];
	$scope.author = '';
	$scope.content = '';
}])