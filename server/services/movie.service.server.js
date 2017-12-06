module.exports = function (app) {
  var movieModel = require('../model/movie/movie.model.server');

  app.post('/movie/create', createMovie);
  app.post('/movie/addMaterial', addMaterialToMovie);
  app.post('/movie/addReview', addReviewToMovie);


  function createMovie(req, res) {
    const movie = req.body;
    movieModel.createMovie(movie)
      .then(
        m => {
          res.json(m)
        }
      )
  }

  function addMaterialToMovie() {

  }

  function addReviewToMovie() {

  }
}
