const passport = require ('passport');
const LocalhostStrategy = require ('LocalhostStrategy');
const User = require ('./models/user');

exports.local = passport.use(new LocalhostStrategy(User.authenticate()));
passport.serializeUser (User.serializeUser());
passport.deserializeUser(User.deserializeUser());

