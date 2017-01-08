import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import idPlugin from '../../plugins/idPlugin'
import passportLocalMongoose from 'passport-local-mongoose'

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  facebook: {
    type: String,
  },
  isAdmin: {
    type: Boolean
  }
});

UserSchema.plugin(idPlugin)
UserSchema.plugin(passportLocalMongoose)

// // // Xavi Code
// UserSchema.pre('save', function(next) {
//     var user = this;
//
//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) return next();
//
//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err);
//
//         // hash the password using our new salt
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);
//
//             // override the cleartext password with the hashed one
//             user.password = hash;
//             next();
//         });
//     });
// });
//
// UserSchema.methods.verifyPassword = function(candidatePassword, cb) {
//   console.log('compare', candidatePassword, this.password, this)
//   bcrypt.compare(candidatePassword, this.hash, function(err, isMatch) {
//     err ? cb(err): cb(null, isMatch);
//   });
// };

module.exports = mongoose.model('user', UserSchema);
