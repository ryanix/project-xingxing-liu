var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var connectionString = 'mongodb://localhost/project'; // for local
if(process.env.MLAB_WEBDEV_USERNAME) { // check if running remotely
  var username = process.env.MLAB_WEBDEV_USERNAME; // get from environment
  var password = process.env.MLAB_WEBDEV_PASSWORD;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds121896.mlab.com:21896/heroku_clkksqf0'; // use yours

}

var db = mongoose.connect(connectionString,{useMongoClient:true});

module.exports = db;
