const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    role: {
      type: String,
      default: 'user',
      required: 1
    },
    country: {
      type: String,
      required: 1
    }
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
