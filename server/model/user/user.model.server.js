var mongoose = require('mongoose')
var UserSchema = require('./user.shcema.server')
var UserModel = mongoose.model('UserModel', UserSchema)

UserModel.crewateUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCreadentials = findUserByCreadentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = finduserByFacebookId;

module.exports = UserModel;

function createUser(user) {
  return UserModel.create(user)
}

function findUserById(userId) {
  return UserModel.findById(userId)
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username})
}

function findUserByCreadentials(username, password) {
  return UserModel.findOne({username: username, password: password})
}

function updateUser(userId, user) {
  return  UserModel.update({_id: userId}, user)
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId})
}

function finduserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}
