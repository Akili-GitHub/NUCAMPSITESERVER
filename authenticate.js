const config = require("./config");
const User = require("./models/user");
const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = (user) => {
  return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
};

// Configuring options for JWT Strategy
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

// Configuring passport with JWT Strategy
const nucampJwtStrategy = new JwtStrategy(opts, (jwt_payload, done) => {
  if (process.env.NODE_ENV !== "test") {
    console.log("JWT payload:", jwt_payload);
  }
  User.findOne({ _id: jwt_payload._id }, (err, user) => {
    if (err) return done(err, false);
    if (user) return done(null, user);
    return done(null, false);
  });
});

exports.jwtPassport = passport.use(nucampJwtStrategy);

exports.verifyAdmin = (req, res, next) => {
  if (req.user.admin) return next();
  const err = new Error("You are not authorized to perform this operation!");
  err.status = 403;
  return next(err);
};

exports.verifyUser = passport.authenticate("jwt", { session: false });
