var mongoose = require('mongoose')
var MovieSchema = mongoose.Schema({
  name: String,
  omdbId: String,
  materials: [{type: mongoose.Schema.Types.ObjectId, ref:'MaterialModel'}],
  review: [{type: mongoose.Schema.Types.ObjectId, ref:'ReviewModel'}],
  dateAdded: Date,
},{collection: 'movie'})
module.exports=MovieSchema
