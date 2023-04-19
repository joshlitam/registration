// Model for registration
const mongoose = require("mongoose");

const RegistrantSchema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  mobileNumber: {
    type: Number,
    require: true,
  },
  distance: {
    type: String,
    required: true,
    default: '5km',
    enum: ['5km', '10km', '15km', '21km']
  },
  shirtSize: {
    type: String,
    required: true,
    default: 'M',
    enum: ['S', 'M', 'L', 'XL', 'XXL']
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Registrant", RegistrantSchema);
