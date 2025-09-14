const Testimonial = require('../models/Testimonial');

// Get all testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create testimonial
exports.createTestimonial = async (req, res) => {
  const { name, company, message } = req.body;
  try {
    const testimonial = new Testimonial({ name, company, message });
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update testimonial
exports.updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { name, company, message } = req.body;

  try {
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) return res.status(404).json({ message: 'Testimonial not found' });

    testimonial.name = name || testimonial.name;
    testimonial.company = company || testimonial.company;
    testimonial.message = message || testimonial.message;

    await testimonial.save();
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete testimonial
exports.deleteTestimonial = async (req, res) => {
  const { id } = req.params;

  try {
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) return res.status(404).json({ message: 'Testimonial not found' });

    await testimonial.remove();
    res.json({ message: 'Testimonial removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};