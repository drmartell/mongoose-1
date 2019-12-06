const Meal = require('./Meal');

// name: {
//   type: String,
//   enum: ['Breakfast', 'Lunch', 'Dinner'],
//   required: () => this.name != 'Breakfast',
// },
// hasProtein: {
//   type: Boolean,
//   required: true,
// },
// calories: {
//   type: Number,
//   required: true,
//   min: 0,
//   max: 5000,
// },

describe('Meal Model', () => {
  describe('name', () => {
    it('requires an name', () => {
      const meal = new Meal({
        hasProtein: true,
        calories: 1200,
      });
      const { errors } = meal.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('hasProtein', () => {
    it('requires hasProtein', () => {
      const meal = new Meal({
        name: 'Breakfast',
        calories: 1200,
      });
      const { errors } = meal.validateSync();
      expect(errors.hasProtein.message).toEqual('Path `hasProtein` is required.');
    });
  });

  describe('calories', () => {
    it('requires calories', () => {
      const meal = new Meal({
        name: 'Breakfast',
        hasProtein: true,
      });
      const { errors } = meal.validateSync();
      expect(errors.calories.message).toEqual('Path `calories` is required.');
    });
  });
});
