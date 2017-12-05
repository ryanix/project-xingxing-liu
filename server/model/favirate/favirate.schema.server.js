var mongoose = require('mongoose')
var FavirateSchema = mongoose.Schema({
  name: String,
  image: String,
  movies: [{type: mongoose.Schema.Types.ObjectId, ref:'movie'}],
  dateCreated: Date,
}, {collection: 'favirate'})

module.exports=FavirateSchema
