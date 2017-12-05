var mongoose = require('mongoose')
var ReviewSchema = mongoose.Schema({
  title: String,
  movieId: {type: mongoose.Schema.Types.ObjectId, ref: 'movie'},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  content: String,
  dateCreated: Date,
  likes: Number,
}, {collection: 'review'})
module.exports=ReviewSchema
