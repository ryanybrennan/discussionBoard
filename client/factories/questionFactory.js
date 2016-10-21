app.factory('questionFactory', ['$http', '$location','$routeParams', function($http, $location, rParams){
  var factory = {};
  factory.showAll = function(callback){
    $http.get('/showAll').then(function(returned_data){
      questions = returned_data.data['questions']
      callback(questions)
    })
  }
  factory.create = function(newQuestion, callback){
    $http.post('/questions', newQuestion).then(function(returned_data){
      callback()
    })
  }
  factory.add = function(newAnswer, callback){
    $http.post('/questions/'+newAnswer._question, newAnswer).then(function(returned_data){
      callback()
    })
  }
  factory.getOne = function(id, callback){
    $http.get('/question/'+id).then(function(returned_data){
      questions = returned_data.data['questions']
      callback(questions)
    })
  }
  factory.index = function(id, callback){
    $http.get('/questions/'+id).then(function(returned_data){
      questions = returned_data.data['questions']
      callback(questions)
    })
  }
  factory.like = function(answer, callback){
    $http.put('/answers/'+answer._id, answer).then(function(returned_data){
      callback()
    })
  }
  return factory;
}])
