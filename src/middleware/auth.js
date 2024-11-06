const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const User = require('../models/User');

const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log("token: ", token);
        
        if (!token) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');
        
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { protect };
