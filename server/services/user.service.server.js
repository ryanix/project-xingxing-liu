module.exports = function (app) {
  var userModel = require('../model/user/user.model.server');
  var bcrypt = require("bcrypt-nodejs");
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;

  const facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'email']
  }
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/register', register)
  app.post('/api/findUserByName', findUserByName);
  app.post('/api/loggedIn', loggedIn);
  app.post('/api/logout', logout);
  app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.crewateUser(user)
      .then(
        function (user) {
          if(user)
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err)
              } else {
                res.json(user)
              }
            });
        }
      );
  }

  function logout(req, res) {
    req.logOut();
    res.sendStatus(200);
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id)
      .then(
        function (user) {
          done(null, user);
        },
        function (err) {
          done(err,null);
        });
  }

  function localStrategy(username, password, done) {
    userModel.findUserByUsername(username)
      .then(
        function (user) {
          if (bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          }else {
            return done(null, false);
          }
        },
        function (err) {
          return done(err, null);
        }
      );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if (!user) {
            var newUser = createUserFromFacebook(token, profile)
            return userModel.crewateUser(newUser)
              .then(function (u) {
                return done(null, u);
              })
          } else {
            return done(null, user)
          }
        },
        function (err) {
          return done(err, null)
        }
      )
  }

  function findUserByName(req, res) {
    const data = req.body
    userModel.findUserByUsername(data.username)
      .then((user) => {
        if (user) {
          res.json(user)
        } else {
          res.json(null)
        }
      })
  }

  function createUserFromFacebook(token, profile) {
    data = profile._json;
    user = {};
    user.username = data.email;
    user.email = data.email;
    user.dateCreated = new Date();
    user.facebook = {}
    user.facebook.id = data.id;
    user.facebook.token = token;
    [f,l] = data.name.split(' ');
    user.firstName = f
    user.lastName = l
    return user
  }
}
