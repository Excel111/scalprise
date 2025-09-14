const Contact = require('../models/Contact');

// Submit contact form
exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Message received' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all contacts (admin)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};