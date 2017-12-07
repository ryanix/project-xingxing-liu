var mongoose = require('mongoose')
var FavirateSchema = mongoose.Schema({
  name: String,
  image: String,
  userId: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
  movies: [{type: mongoose.Schema.Types.ObjectId, ref:'MovieModel'}],
  dateCreated: Date,
}, {collection: 'favirate'})

module.exports=FavirateSchema
