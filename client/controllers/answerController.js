app.controller('answerController', ['$scope','questionFactory','$routeParams', '$location', function($scope, questionFactory, rParams, $location){
  $scope.discuss = function(){
    questionFactory.index(rParams.id, function(returned_data){
      $scope.question = returned_data
    })
  }
  $scope.discuss()
  $scope.like = function(answer){
    answer.likes += 1
    questionFactory.like(answer, disc)
  }
  function disc(){
    $scope.discuss()
  }
}])
