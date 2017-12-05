var mongoose = require('mongoose')
var FavirateSchema = require('./favirate.schema.server')
var FavirateModel = mongoose.model('Favirate', FavirateSchema)

FavirateModel.createFavirate = createFavirate;
FavirateModel.findById = findById;
FavirateModel.findByName = findByName;
FavirateModel.updateFavirate = updateFavirate;
FavirateModel.deleteFavirate = deleteFavirate;

module.exports(FavirateModel)


function createFavirate(fav) {
  return FavirateModel.create(fav);
}

function findById(id) {
  return FavirateModel.findById(id);
}

function findByName(name) {
  return FavirateModel.find({name: name});
}

function updateFavirate(id, fav) {
  return FavirateModel.update({_id: id}, fav);
}

function deleteFavirate(id) {
  return FavirateModel.remove({_id: id});
}
