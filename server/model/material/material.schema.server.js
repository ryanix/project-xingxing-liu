var mongoose = require('mongoose')
var MaterialSchema = mongoose.Schema({
  title: String,
  movieId: {type: mongoose.Schema.Types.ObjectId, ref: 'movie'},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  content: String,
  video: String,
  audio: String,
  text: String,
  likes: Number,
  dateCreated: Date,
}, {collection: 'material'})

module.export=MaterialSchema
