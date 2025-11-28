import passport from 'passport';

export const requireAuth = passport.authenticate('jwt', { session: false });

export const optionalAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) { return next(err); }

    if (user) {
      req.user = user;
    }

    next();
  })(req, res, next);
};