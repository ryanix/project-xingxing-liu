var mongoose = require('mongoose')
var MovieSchema = require('./movie.schema.server')
var MovieModel = mongoose.model('MovieModel', MovieSchema)

MovieModel.createMovie = createMovie;
MovieModel.findByMId = findByMId;
MovieModel.findByName = findByName;
MovieModel.findByMovieId = findByMovieId;
MovieModel.updateMovie = updateMovie;
MovieModel.deleteMovie = deleteMovie;

module.exports = MovieModel


function createMovie(m) {
  return MovieModel.create(m);
}

function findByMId(id) {
  return MovieModel.findById(id);
}

function findByMovieId(id) {
  return MovieModel.findOne({omdbId: id})
}

function findByomdbId(id) {
  return MovieModel.find({omdbId: id});
}

function findByName(name) {
  return MovieModel.find({name: name});
}

function updateMovie(id, m) {
  return MovieModel.update({_id: id}, m);
}

function deleteMovie(id) {
  return MovieModel.remove({_id: id});
}
