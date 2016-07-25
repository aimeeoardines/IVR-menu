var ivrApp = angular.module('ivrApp', []);

ivrApp.controller('IvrCtrl', function ($scope) {
	$scope.menuBtns = {
		name : '',
		items : [
			{
				name : 'Answer',
				items : []
			},
			{
				name : 'Set Music on Hold',
				items : []
			},
			{
				name : 'Tech Support',
				items : []
			}
		]
	}
	$scope.currentMenuBtns = $scope.menuBtns;
	$scope.menuName = 'IVR MENU';
	$scope.navigation = [];
	$scope.menuLabels = ['Answer', 'Set Music on Hold', 'Leave Voicemail', 'Tech Support', 'Wait', 'Record', 'Hangup'];

	$scope.addMenu = function(){
		var x = Math.floor((Math.random() * 6) + 0);
		$scope.currentMenuBtns.items.push({ name : $scope.menuLabels[x], items : [] });
	};

	$scope.removeMenu = function(){
		$scope.currentMenuBtns.items.pop({ name : '', items : []});
	};

	$scope.showMenu = function(index){
		$scope.navigation.push(index + 1);
		$scope.page();
	};

	$scope.prevMenu = function(){
		$scope.navigation.pop([]);
		$scope.page();
	};

	$scope.page = function(){
		$scope.parentBtnName = $scope.navigation.join('.');

		if($scope.navigation == ''){
			$scope.menuName = 'IVR MENU';
		}

		$scope.currentMenuBtns = $scope.menuBtns;

		$scope.navigation.forEach(function(item){
			$scope.currentMenuBtns = $scope.currentMenuBtns.items[item-1];
			$scope.menuName = $scope.parentBtnName;
		});

	};

});

