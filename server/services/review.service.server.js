module.exports = function (app) {

  var reviewModel = require('../model/review/review.model.server');


  app.post('/review/findOrCreate', findOrCreate);
  app.put('/review/updateReview', updateReview);


  function findOrCreate(req, res) {
    const review = req.body;
    reviewModel.findByUMId(review.userId, review.movieId)
      .then(
        result => {
          if (!result) {
            reviewModel.createReview(review)
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

  function updateReview(req, res) {
    const review = req.body;
    reviewModel.updateReview(review._id, review)
      .then( result => res.json(result))
  }

}
