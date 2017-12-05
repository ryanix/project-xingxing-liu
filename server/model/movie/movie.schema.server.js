var mongoose = require('mongoose')
var MovieSchema = mongoose.Schema({
  name: String,
  omdbId: String,
  materials: [{type: mongoose.Schema.Types.ObjectId, ref:'material'}],
  review: [{type: mongoose.Schema.Types.ObjectId, ref:'review'}],
  dateAdded: Date,
},{collection: 'movie'})
module.exports=MovieSchema
