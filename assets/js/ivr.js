var ivrApp = angular.module('ivrApp', []);

ivrApp.controller('IvrCtrl', function ($scope) {
	$scope.menuBtns = [[],[],[]];
	$scope.menuName = 'IVR MENU';
	$scope.navigation = [];

	$scope.addMenu = function(){
		$scope.menuBtns.push([]);
		// console.log('++++',$scope.menuBtns);

	};

	$scope.removeMenu = function(){
		$scope.menuBtns.pop([]);
		// console.log('---',$scope.menuBtns);
	};

	$scope.showSubMenu = function(index){
		$scope.menuBtns = $scope.menuBtns[index];

		var indexValue = index + 1;
		$scope.menuName = indexValue;
		$scope.parentBtnName = indexValue;

		$scope.navigation.push(indexValue);
		$scope.parentBtnName = $scope.navigation.join('.');
		$scope.menuName = $scope.parentBtnName;

		console.log('nav push',$scope.navigation);

	};

	$scope.back = function(){
		$scope.navigation.forEach(function(i){
			$scope.arrayBack = $scope.navigation.pop([]);
			console.log('nav pop',$scope.navigation);

			// $scope.menuBtns = $scope.menuBtns[0[1[2]]];
			// console.log('---',$scope.menuBtns);
		});
	};


});

