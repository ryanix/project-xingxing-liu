var mongoose = require('mongoose')
var ReviewSchema = require('./review.schema.server')
var ReviewModel = mongoose.model('Review', ReviewSchema)

ReviewModel.createReview = createReview;
ReviewModel.findById = findById;
ReviewModel.findByName = findByName;
ReviewModel.findByMovieId = findByMovieId;
ReviewModel.findByUserId = findByUserId;
ReviewModel.updateReview = updateReview;
ReviewModel.deleteReview = deleteReview;

module.exports(ReviewModel)


function createReview(m) {
  return ReviewModel.create(m);
}

function findById(id) {
  return ReviewModel.findById(id);
}

function findByMovieId(id) {
  return ReviewModel.find({movieId: id});
}

function findByUserId(id) {
  return ReviewModel.find({userId: id});
}

function findByName(name) {
  return ReviewModel.find({title: name});
}

function updateReview(id, m) {
  return ReviewModel.update({_id: id}, m);
}

function deleteReview(id) {
  return ReviewModel.remove({_id: id});
}
