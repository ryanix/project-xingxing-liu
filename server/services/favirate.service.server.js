module.exports = function (app) {
  var favirateModel = require('../model/favirate/favirate.model.server');

  app.post('/collection/create', createCollection);
  app.post('/collection/addMovieToCollection/:cid', addMovieToCollection);
  app.post('/collection/removeMovieFromCollection/', removeMovieFromCollection);
  app.get('/collection/fetchAllCollection', fetchAllCollection);
  app.get('/collection/findAllCollection/:userId', findAllCollection);
  app.get('/collection/findCollectionDetail/:cid', findCollectoinDetail);
  app.delete('/collection/deleteCollection/:cid', deleteCollection);

  function fetchAllCollection(req, res) {
    favirateModel.find({})
      .then( result => {
        res.json(result)
      })
  }

  function removeMovieFromCollection(req, res) {
    const data = req.body;
    const mid = data.movie;
    const cid = data.collection;
    favirateModel.removeMovieFromCollection(mid, cid)
      .then( result => res.json(result))
  }

  function findCollectoinDetail(req, res) {
    const cid = req.params['cid'];
    favirateModel.findCollectoinDetail(cid)
      .then(
        result => res.json(result)
      )
  }

  function addMovieToCollection(req, res) {
    const movie = req.body;
    const cid = req.params['cid'];
    favirateModel.addMovieToCollection(movie, cid)
      .then(
        result => {
          res.json(result)
        }
      )
  }


  function createCollection(req, res) {
    const fav = req.body;
    favirateModel.createFavirate(fav)
      .then(
        (result) => {
          res.json(result)
        }
      )
  }

  function findAllCollection(req, res) {
    const id = req.params['userId'];
    favirateModel.findAllCollections(id)
      .then(
        collection => {
          res.json(collection)
        }
      )
  }

  function deleteCollection(req, res) {
    const id = req.params['cid'];
    favirateModel.deleteFavirate(id)
      .then(
        result => {
          res.json(result)
        }
      )
  }
}
