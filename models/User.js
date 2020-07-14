const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const bcrypt = require('bcrypt');

autoIncrement.initialize(mongoose.connection);
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    first: { type: String, required: true },
    last: { type: String, required: true },
    _id: { type: Number },
    phone: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    birthDate: { type: Date },
    location: { type: String },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(autoIncrement.plugin, {
  model: 'User',
  field: '_id',
  startAt: 10001,
});

const User = mongoose.model('User', userSchema);

// encrypt password before save
userSchema.pre('save', (next) => {
  const user = this;
  console.log('this');
  console.log(this);

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      next(err);
    } else {
      user.password = hash;
      next();
    }
  });
});

module.exports = User;
