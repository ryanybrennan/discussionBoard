var user = require('../controllers/users.js')
var question = require('../controllers/questions.js')
module.exports = function(app){
  app.post('/users', user.login);
  app.get('/checkUser', user.checkUser);
  app.get('/logout', user.logout);
  app.get('/showAll', question.showAll);
  app.post('/questions', question.create);
  app.post('/questions/:id', question.add);
  app.get('/questions/:id', question.index);
  app.get('/question/:id', question.getOne);
  app.put('/answers/:id', question.like)

}
