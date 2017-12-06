module.exports = function (app) {
  var favirateModel = require('../model/favirate/favirate.model.server');

  app.post('/collection/create', createCollection);
  app.post('/collection/addMovieToCollection/:cid', addMovieToCollection);
  app.get('/collection/findAllCollection/:userId', findAllCollection);
  app.delete('/collection/deleteCollection', deleteCollection);

  function addMovieToCollection(req, res) {
    const movie = req.body
    const cid = req.params['cid']
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
    const c = req.body;
    const id = c._id;
    favirateModel.deleteFavirate(id)
      .then(
        result => {
          res.json(result)
        }
      )
  }
}
