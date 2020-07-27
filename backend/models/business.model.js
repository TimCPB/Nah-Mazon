const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const businessSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  postcode: { type: String, required: true, trim: true },
}, {
  timestamps: true,
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;