const Date = require('./Date');

// event: {
//   type: String,
//   required: true,
// },
// date: {
//   type: Date,
//   required: true,
// },
// attending: {
//   type: Boolean,
//   required: true,
// },

// const date = new Date({
//   event: 'Holiday Party',
//   date: '2040-12-31',
//   attending: true,
// });

describe('Date Model', () => {
  describe('event', () => {
    it('requires an event', () => {
      const date = new Date({
        date: '2040-12-31',
        attending: true,
      });
      const { errors } = date.validateSync();
      expect(errors.event.message).toEqual('Path `event` is required.');
    });
  });

  describe('date', () => {
    it('requires a date', () => {
      const date = new Date({
        event: 'Holiday Party',
        attending: true,
      });
      const { errors } = date.validateSync();
      expect(errors.date.message).toEqual('Path `date` is required.');
    });

    it('requires date to be of type date', () => {
      const date = new Date({
        event: 'Holiday Party',
        date: 'that day',
        attending: true,
      });
      const { errors } = date.validateSync();
      expect(errors.date.message).toEqual('Cast to Date failed for value "that day" at path "date"');
    });
  });

  describe('attending', () => {
    it('requires attending', () => {
      const date = new Date({
        event: 'Holiday Party',
        date: '2040-12-31',
      });
      const { errors } = date.validateSync();
      expect(errors.attending.message).toEqual('Path `attending` is required.');
    });
  });
});
