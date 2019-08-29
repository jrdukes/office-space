const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema(
  {
    business_name: {
      type: String
    },
    property_address: {
      type: String
    },
    business_email: {
      type: String
    },
    business_phone: {
      type: Number
    }
  },
  {
    collection: 'business'
  }
);

module.exports = mongoose.model('Business', Business);
