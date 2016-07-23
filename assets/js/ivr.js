var ivrApp = angular.module('ivrApp', []);

ivrApp.controller('IvrCtrl', function ($scope) {
	$scope.menuBtns = [[],[],[]];
	$scope.menuName = 'IVR MENU';

	$scope.addMenu = function(){
		$scope.menuBtns.push([]);

	};

	$scope.removeMenu = function(){
		$scope.menuBtns.pop([]);
	};

	$scope.showSubMenu = function(index, test){
		$scope.menuName = index + 1;
		// $scope.parentBtnName = test;
		$scope.menuBtns = $scope.menuBtns[index];
	};


});

