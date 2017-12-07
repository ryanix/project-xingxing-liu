module.exports = function (app) {

  var reviewModel = require('../model/review/review.model.server');


  app.post('/review/findOrCreate', findOrCreate);
  app.put('/review/updateReview', updateReview);
  app.get('/review/findAllReviewByMovieId/:mid', findAllReviewByMovieId);
  app.get('/review/fingAllReviewByUserId/:uid', fingAllReviewByUserId)
  app.get('/review/findAllReview', findAllReview);
  app.delete('/review/deleteReview/:rid', deleteReview)


  function findAllReview(req, res) {
    reviewModel.find({})
      .then( result => {
        res.json(result)
      })
  }

  function deleteReview(req, res) {
    const id = req.params['rid'];
    reviewModel.deleteReview(id)
      .then(r => {
        res.json(r)
      })
  }
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

  function findAllReviewByMovieId(req, res) {
    const id = req.params['mid'];
    reviewModel.findByMovieId(id)
      .then( result => res.json(result))
  }

  function fingAllReviewByUserId(req, res) {
    const id = req.params['uid'];
    reviewModel.findByUserId(id)
      .then( result => res.json(result))
  }

}
