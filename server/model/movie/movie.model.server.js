var mongoose = require('mongoose')
var MovieSchema = require('./movie.schema.server')
var MovieModel = mongoose.model('MovieModel', MovieSchema)

MovieModel.createMovie = createMovie;
MovieModel.findByMId = findByMId;
MovieModel.findByName = findByName;
MovieModel.findByMovieId = findByMovieId;
MovieModel.updateMovie = updateMovie;
MovieModel.deleteMovie = deleteMovie;
MovieModel.addMaterial = addMaterial;
MovieModel.addReview = addReview;


module.exports = MovieModel

function addReview(review) {
  return MovieModel.findByMId(review.movieId)
    .then( u => {
      if(!u.review.includes(material._id)) {
        u.review.push(material._id);
      }
      return u.save();
    })
}

function addMaterial(material) {
  return MovieModel.findByMId(material.movieId)
    .then( u => {
      if(!u.materials.includes(material._id)) {
        u.materials.push(material._id);
      }
      return u.save();
    })
}

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
