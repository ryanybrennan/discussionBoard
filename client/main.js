var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'userController'
  })
  .when('/', {
    templateUrl: 'partials/home.html'
  })
  .when('/new_question', {
    templateUrl: 'partials/question.html'
  })
  .when('/question/:id/new_answer', {
    templateUrl: 'partials/answer.html'
  })
  .when('/question/:id', {
    templateUrl: 'partials/board.html'
  })
  .otherwise({
    redirectTo: 'partials/login.html'
  })
// Routes to load your new and edit pages with new and edit controllers attached to them!
});
