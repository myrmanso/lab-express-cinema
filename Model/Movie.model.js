const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  // TODO: write the schema
  title: { type: String, required: true },
  director: { type: String, required: true },
  stars: { type: [String] },
  image: { type: String },
  description: { type: String, required: true },
  showtimes: { type: [String] },
});


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;