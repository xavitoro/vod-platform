'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillLearntSchema = new Schema ({
  name: {
    type: String,
    unique: true,
    required: true
  },
});

module.exports = mongoose.model('skillLearnt', skillLearntSchema);
