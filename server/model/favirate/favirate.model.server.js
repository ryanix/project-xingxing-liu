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
FavirateModel.findCollectoinDetail = findCollectoinDetail;
FavirateModel.removeMovieFromCollection = removeMovieFromCollection;



module.exports = FavirateModel;

function removeMovieFromCollection(mid, cid) {
  return FavirateModel.findByFId(cid)
    .then( c => {
      const index = c.movies.indexOf(mid);
      c.movies.splice(index, 1)
      return c.save()
    })
}

function findCollectoinDetail(cid) {
  return FavirateModel.findByFId(cid)
    .populate('movies')
    .exec();
}


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
        if (!result.movies.includes(movie._id)){
          result.movies.push(movie._id)
        }
        return result.save()
      }
    )
}


