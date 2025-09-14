const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { port, mongoURI } = require('./config');

const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contacts');
const serviceRoutes = require('./routes/services');
const testimonialRoutes = require('./routes/testimonials');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/testimonials', testimonialRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });