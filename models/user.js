const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

// Create the User Authentication with Passport 
const userSchema = new Schema({
admin: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(passportLocalMongoose);// Use the Plugin to implement the passport for userSchema
module.exports = mongoose.model("User", userSchema);
