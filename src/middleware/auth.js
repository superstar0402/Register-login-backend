const passport = require('passport');

const protect = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        
        if (!user) {
            return res.status(401).json({ message: 'Authentication required' });
        }
        
        req.user = user;
        next();
    })(req, res, next);
};

module.exports = { protect };








