app.controller('homeCtrl', function($http, $scope){
    $scope.users = [];
	

	$scope.getUsers = function(){
		$http.get('/api/users').then(function(response){
			$scope.users = response.data;
		});
	}
	$scope.getUsers();

    $scope.add = function(){
		$http.post('/api/users',$scope.user).then(function(response){
			$scope.user.name = '';
			$scope.user.email = '';
			$scope.user.age = '';
			$scope.getUsers();
		})
	};

    $scope.update = function(User){
		$http.put('/api/users', User).then(function(response){
			console.log('Usuário atualizado!');
			$scope.getUsers();
		});

	};

    $scope.removeUser = function(User){
		$http.delete('/api/users/'+User._id).then(function(response){
			$scope.getUsers();
		});
	}
});