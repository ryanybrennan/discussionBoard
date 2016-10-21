var mongoose = require('mongoose')
var Schema = mongoose.Schema
var QuestionSchema = new Schema({
  username: {type: String},
  content: {type: String, required: true},
  description:{type: String},
  _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
},{timestamps: true}
);
mongoose.model('Question', QuestionSchema)
