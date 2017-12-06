var mongoose = require('mongoose')
var MaterialSchema = require('./material.schema.server')
var MaterialModel = mongoose.model('MaterialModel', MaterialSchema)

MaterialModel.createMaterial = createMaterial;
MaterialModel.findBymId = findBymId;
MaterialModel.findByName = findByName;
MaterialModel.findByMovieId = findByMovieId;
MaterialModel.findByUserId = findByUserId;
MaterialModel.findByUMId = findByUMId;
MaterialModel.updateMaterial = updateMaterial;
MaterialModel.deleteMaterial = deleteMaterial;

module.exports = MaterialModel

function findByUMId(uid, mid){
  return MaterialModel.findOne({movieId: mid, userId: uid})
}

function createMaterial(m) {
  return MaterialModel.create(m);
}

function findBymId(id) {
  return MaterialModel.findById(id);
}

function findByMovieId(id) {
  return MaterialModel.find({movieId: id});
}

function findByUserId(id) {
  return MaterialModel.find({userId: id});
}

function findByName(name) {
  return MaterialModel.find({title: name});
}

function updateMaterial(id, m) {
  return MaterialModel.update({_id: id}, m);
}

function deleteMaterial(id) {
  return MaterialModel.remove({_id: id});
}
