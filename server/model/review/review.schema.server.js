var mongoose = require('mongoose')
var ReviewSchema = mongoose.Schema({
  title: String,
  movieId: {type: mongoose.Schema.Types.ObjectId, ref: 'MovieModel'},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  content: String,
  dateCreated: Date,
  likes: Number,
}, {collection: 'review'})
module.exports=ReviewSchema
