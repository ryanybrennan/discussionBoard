var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')
module.exports = (function(){
  return{
    index: function(req, res){
      Question.findOne({_id: req.params.id}).populate('_answers').exec(function(err, data){
        if(err){
          console.log(err);
        }else{
          console.log(data)
          res.json({questions: data})
        }
      });
    },
    getOne: function(req, res){
      Question.find({_id:req.params.id}, function(err, data){
      if(err){
        console.log(err);
      }else{
        res.json({questions: data})
      }
      })
    },
    create: function(req, res){
      var question = new Question(req.body);
      question.save(function(err, data){
        if(err){
          console.log(err);
        }else{
          res.json({questions: data});
        }
      });
    },
    add: function(req, res){
      var answer = new Answer(req.body);
      Question.findOne({_id: req.body._question}, function(err, question){
        question._answers.push(answer);
        question.save(function(err, question){
          if(err){
            console.log(err);
          }else{
            answer._question = question;
            answer.save(function(err, data){
              if(err){
                console.log(err)
              }else{
                res.json({posts: data})
              };
            });
          };
        });
      });
    },
    showAll: function(req, res){
      Question.find({}, function(err, data){
        if(err){
          console.log(err)
        }else{
          res.json({questions: data})
        }
      })
    },
    like: function(req,res){
      Answer.update({_id: req.params.id},{likes: req.body.likes}, function(err, data){
        if(err){console.log(err)}
        else{
          res.json({questions: data})
        }
      })
    }

  };
})();
