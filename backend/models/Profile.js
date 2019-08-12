const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    role: {
      type: String,
      default: 'user'
    },
    country: {
      type: String,
      required: 1
    },
    education: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
