const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Testimonial', testimonialSchema);