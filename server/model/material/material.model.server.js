var mongoose = require('mongoose')
var MaterialSchema = require('./material.schema.server')
var MaterialModel = mongoose.model('Material', MaterialSchema)

MaterialModel.createMaterial = createMaterial;
MaterialModel.findById = findById;
MaterialModel.findByName = findByName;
MaterialModel.findByMovieId = findByMovieId;
MaterialModel.findByUserId = findByUserId;
MaterialModel.updateMaterial = updateMaterial;
MaterialModel.deleteMaterial = deleteMaterial;

module.exports(MaterialModel)


function createMaterial(m) {
  return MaterialModel.create(m);
}

function findById(id) {
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
