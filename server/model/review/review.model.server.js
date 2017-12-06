var mongoose = require('mongoose')
var ReviewSchema = require('./review.schema.server')
var ReviewModel = mongoose.model('ReviewModel', ReviewSchema)

ReviewModel.createReview = createReview;
ReviewModel.findByrId = findByrId;
ReviewModel.findByName = findByName;
ReviewModel.findByMovieId = findByMovieId;
ReviewModel.findByUserId = findByUserId;
ReviewModel.updateReview = updateReview;
ReviewModel.deleteReview = deleteReview;
ReviewModel.findByUMId = findByUMId;

module.exports = ReviewModel

function findByUMId(uid, mid) {
  return ReviewModel.findOne({userId: uid, movieId: mid})
}

function createReview(m) {
  return ReviewModel.create(m);
}

function findByrId(id) {
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
