const express = require('express');
const router = express.Router();
const { register, login, getMe, loginWithToken } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/login-token', loginWithToken);
router.get('/me', protect, getMe);

module.exports = router;