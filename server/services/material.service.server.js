module.exports = function (app) {

  var materialModel = require('../model/material/material.model.server');

  app.post('/material/findOrCreate', findOrCreate);
  app.put('/material/updateMaterial', updateMaterial);
  app.get('/material/findAllMaterial', findAllMaterial);
  app.get('/material/findAllMaterialByMovieId/:mid', findAllMaterialByMovieId);
  app.get('/material/fingAllMaterialByUserId/:uid', fingAllMaterialByUserId);
  app.delete('/material/deleteMaterial/:mid', deleteMaterial);

  function findAllMaterial(req, res) {
    materialModel.find({})
      .then( result => {
        res.json(result)
      })
  }

  function deleteMaterial(req, res) {
    const id = req.params['mid'];
    materialModel.deleteMaterial(id)
      .then(result => {
        res.json(result);
      })
  }
  function findOrCreate(req, res) {
    const material = req.body;
    materialModel.findByUMId(material.userId, material.movieId)
      .then(
        result => {
          if (!result) {
            materialModel.createMaterial(material)
              .then(
                r => {
                  res.json(r)
                }
              )
          } else {
            res.json(result)
          }
        }
      )
  }

  function updateMaterial(req, res) {
    const material = req.body;
    materialModel.updateMaterial(material._id, material)
      .then(result => res.json(result))
  }

  function findAllMaterialByMovieId(req, res) {
    const id = req.params['mid'];
    materialModel.findByMovieId(id)
      .then( result => res.json(result));
  }

  function fingAllMaterialByUserId(req, res) {
    const id = req.params['uid'];
    materialModel.findByUserId(id)
      .then(result => res.json(result));
  }

}
