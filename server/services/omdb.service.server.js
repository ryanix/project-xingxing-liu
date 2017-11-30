module.exports = function(app) {
  app.post('/movie/searchByName', searchByName)
  app.post('/movie/searchById', searchById)
  app.post('/movie/posterName', searchPosterByTitle)
  app.post('/movie/posterId', searchPosterById)


  var request = require('request')


  const SEARCH_BY_NAME_URL = process.env.OMDB_URL_BY_TITLE
  const SEARCH_BY_ID_URL = process.env.OMDB_URL_BY_ID
  const SEARCH_BY_ID_POSTER = process.env.OMDB_POSTER_BY_ID
  const SEARCH_BY_NAME_POSTER = process.env.OMDB_POSTER_BY_TITLE

  function searchByName(req, res) {
    const data = req.body
    const url = SEARCH_BY_NAME_URL.replace('searchTerm', data.searchTerm)
    request.get(url, function(err, response, body){
      res.send(body)
    })
  }

  function searchById(req, res) {
    const data = req.body
    const url = SEARCH_BY_ID_URL.replace('searchId', data.searchId)
    request.get(url, function(err, response, body){
      res.send(body)
    })
  }

  function searchPosterByTitle(req, res) {
    const data = req.body
    const url = SEARCH_BY_ID_POSTER.replace('searchTerm', data.searchTerm)
    request.get(url, function(err, response, body){
      res.send(body)
    })
  }

  function searchPosterById(req, res) {
    const data = req.body
    const url = SEARCH_BY_NAME_POSTER.replace('searchId', data.searchId)
    request.get(url, function(err, response, body){
      res.send(body)
    })
  }
}
