// Model module: In the nucampsiteServer/models folder, create a new file named partner.js.
// Schema: In this file, create a new Mongoose Schema named partnerSchema. Use this sample partner document given below as your guide:
// {
//     "name": "Mongo Fly Shop",
//     "image": "images/mongo-logo.png",
//     "featured": false,
//     "description": "Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop."
// }
// Schema Fields: All fields should be required except for "featured", and the name should be unique.
// Timestamps: Ensure that each document created from this Schema will automatically be given CreatedAt and UpdatedAt fields.
// Model: Create a Model named Partner from this Schema.
// Export: Export the Partner Model from this module.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partnerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
