const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

// Generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, username: user.username },
    jwtSecret,
    { expiresIn: '1d' }
  );
};

// Admin login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      res.json({
        token: generateToken(user),
        username: user.username,
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};