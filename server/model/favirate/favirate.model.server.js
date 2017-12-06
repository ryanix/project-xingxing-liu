var mongoose = require('mongoose');
var FavirateSchema = require('./favirate.schema.server');
var FavirateModel = mongoose.model('FavirateModel', FavirateSchema);
var userModel = require('../user/user.model.server');
var movieModel = require('../movie/movie.model.server');

FavirateModel.createFavirate = createFavirate;
FavirateModel.findByFId = findByFId;
FavirateModel.findByName = findByName;
FavirateModel.updateFavirate = updateFavirate;
FavirateModel.deleteFavirate = deleteFavirate;
FavirateModel.findAllCollections = findAllCollections;
FavirateModel.addMovieToCollection = addMovieToCollection;

module.exports = FavirateModel;


function createFavirate(fav) {
  return FavirateModel.create(fav)
    .then(f => {
      newf = f
      return userModel.findUserById(fav['userId'])
        .then( user => {
          user.favirates.push(newf._id)
          return user.save();
        })
    });
}

function findByFId(id) {
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

function findAllCollections(id) {
  return userModel.findOne({_id: id})
    .populate('favirates')
    .exec();
}

function addMovieToCollection(movie, cid) {
  return findByFId(cid)
    .then(
      result => {
        if (!result.movies.include(movie._id)){
          result.movies.push(movie._id)
        }
        return result.save()
      }
    )
}


