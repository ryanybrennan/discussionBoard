var mongoose = require('mongoose')
var Schema = mongoose.Schema
var AnswerSchema = new Schema({
  username: {type: String},
  content: {type: String, required: true},
  details: {type: String},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
  likes: {type: Number, default: 0}
},{timestamps: true}
);
mongoose.model('Answer', AnswerSchema)
