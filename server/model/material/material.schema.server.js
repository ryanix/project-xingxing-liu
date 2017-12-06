var mongoose = require('mongoose')
var MaterialSchema = mongoose.Schema({
  title: String,
  movieId: {type: mongoose.Schema.Types.ObjectId, ref: 'MovieModel'},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  content: String,
  video: String,
  audio: String,
  text: String,
  likes: Number,
  dateCreated: Date,
}, {collection: 'material'})

module.exports=MaterialSchema
