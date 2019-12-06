const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('Painting', schema);
