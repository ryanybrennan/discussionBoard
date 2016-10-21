app.controller('questionController', ['$scope', 'questionFactory', '$location', function($scope, questionFactory, $location){
  $scope.question = {}

  $scope.index = function(){
    questionFactory.showAll(function(returned_data){
      $scope.questions = returned_data

    })
  }

  $scope.index()
  $scope.create = function(){
    if(!$scope.question.content || $scope.question.content.length < 10){
      alert('Question must be at least 10 characters!')
    }else{
      $scope.question.username = $scope.currentUser.name
      questionFactory.create($scope.question, function(){$location.url('/')})
    }
  }
}])
