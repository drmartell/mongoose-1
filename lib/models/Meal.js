const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  name: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner'],
    required: () => this.name != 'Breakfast',
  },
  hasProtein: {
    type: Boolean,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
    min: 0,
    max: 5000,
  },
});

module.exports = mongoose.model('Meal', schema);
