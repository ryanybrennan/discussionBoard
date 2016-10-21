app.factory('userFactory', ['$http', '$location', function($http, $location){
  var factory = {}
  factory.login = function(user){
    $http.post('/users', user).then(function(data){
      if(data.data.status){
        $location.url('/');
      }else{
        alert("Something went wrong")
      }
    })
  }
  factory.checkUser = function(callback){
    $http.get('/checkUser').then(function(data){
      callback(data.data);
    })
  }
  return factory;
}])
