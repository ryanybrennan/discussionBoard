app.controller('userController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location){
  $scope.login = function(){
    if(!$scope.user || $scope.user.name.length < 3){
      alert("Name must be at least 3 characters");
    }else{
      userFactory.login($scope.user)
    }
  }
  userFactory.checkUser(function(data){
    $scope.currentUser = data.user;
    if(!$scope.currentUser){
      $location.url('/login');
    }
  })
}])
