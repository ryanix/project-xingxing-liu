module.exports = function (app) {
  var movieModel = require('../model/movie/movie.model.server');

  app.post('/movie/findOrCreate', findOrCreate);
  app.post('/movie/addMaterial', addMaterialToMovie);
  app.post('/movie/addReview', addReviewToMovie);


  function findOrCreate(req, res) {
    const movie = req.body;
    movieModel.findByMovieId(movie.omdbId)
      .then(
        m => {
          if (m) {
            res.json(m);
          } else {
            movieModel.createMovie(movie)
              .then(
                result => {
                  res.json(result);
                }
              )
          }
        }
      );
  }

  function addMaterialToMovie(req, res) {
    const material = req.body;
    movieModel.addMaterial(material)
      .then(
        m => {
          res.json(m);
          }
      );
  }

  function addReviewToMovie() {
    const review = req.body;
    movieModel.addReview(review)
      .then( m => res.json(m))
  }

  console.log('movie server runing')
}
