var virApp = angular.module('virApp', []);

virApp.controller('VirCtrl', function ($scope) {
	$scope.btnNumbers = [
		{'name' : 'one'},
		{'name': 'two'},
		{'name': 'three'}
	];
});
