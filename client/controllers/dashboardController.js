app.controller('dashboardController', ['$scope','questionFactory','$routeParams', '$location', function($scope, questionFactory, rParams, $location){
  $scope.getOne = function(){
    questionFactory.getOne(rParams.id, function(returned_data){
      $scope.question = returned_data[0]
    })
  }
  $scope.getOne()
  $scope.add = function(answer, question_id){
    if(!answer.content || answer.content.length < 5){
      alert('Answer must be at least 5 characters!')
    }else{
      answer._question = question_id
      answer.username = $scope.currentUser.name
      questionFactory.add(answer, function(){$location.url('/')})
    }
  }
}])
