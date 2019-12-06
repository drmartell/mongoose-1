const Painting = require('./Painting');

// title: {
//   type: String,
//   required: true,
// },
// artist: {
//   type: String,
//   required: true,
// },
// colors: {
//   type: [String],
//   required: true,
// },

describe('Painting Model', () => {
  describe('title', () => {
    it('requires a title', () => {
      const painting = new Painting({
        artist: 'Rickasso',
        colors: ['red', 'orange', 'yellow'],
      });
      const { errors } = painting.validateSync();
      expect(errors.title.message).toEqual('Path `title` is required.');
    });
  });

  describe('artist', () => {
    it('requires an artist', () => {
      const painting = new Painting({
        title: 'untitled',
        colors: ['red', 'orange', 'yellow'],
      });
      const { errors } = painting.validateSync();
      expect(errors.artist.message).toEqual('Path `artist` is required.');
    });
  });
  
  // not test for array
});
