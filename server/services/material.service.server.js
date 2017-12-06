module.exports = function (app) {

  var materialModel = require('../model/material/material.model.server');

  app.post('/material/findOrCreate', findOrCreate);
  app.put('/material/updateMaterial', updateMaterial);


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

}
