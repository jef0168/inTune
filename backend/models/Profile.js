const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  bio: {
    type: String,
  },
  location: {
    type: String
  },
  music: {
    type: [String],
    required: true
  },
  instruments: {
    type: [String]
  },
  status: {
    type: String,
    required: true
  },
  born: {
    type: String
  },
  social: {
    instagram: {
      type: String
    },
    twitter: {
      type: String
    },
    soundcloud: {
      type: String
    },
    facebook: {
      type: String
    },
    youtube: {
      type: String
    },
    personal: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
