const Service = require('../models/Service');

// Get all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create service
exports.createService = async (req, res) => {
  const { title, description, icon } = req.body;
  try {
    const service = new Service({ title, description, icon });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update service
exports.updateService = async (req, res) => {
  const { id } = req.params;
  const { title, description, icon } = req.body;

  try {
    const service = await Service.findById(id);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    service.title = title || service.title;
    service.description = description || service.description;
    service.icon = icon || service.icon;

    await service.save();
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete service
exports.deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findById(id);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    await service.remove();
    res.json({ message: 'Service removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};