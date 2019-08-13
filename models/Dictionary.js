const mongoose = require('mongoose');

const DictionarySchema = new mongoose.Schema(
  {
    eng: {
      type: String,
      required: 1
    },
    rus: {
      type: String,
      required: 1
    }
  },
  { timestamps: true }
);

module.exports = Dictionary = mongoose.model('dictionary', DictionarySchema);
