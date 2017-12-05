var mongoose = require('mongoose')
var UserSchema = mongoose.Schema({
  username: String,
  favirates: [{type: mongoose.Schema.Types.ObjectId, ref: 'favirate'}],
  friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  dateCreated: Date,
  userType:{
    type: String,
    enum: ['0', '1'],
    default: '1',
  },
  facebook: {
    id: String,
    token: String,
  },
}, {collection:'user'})

module.exports=UserSchema
