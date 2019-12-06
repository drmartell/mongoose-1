const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  event: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  attending: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Date', schema);
