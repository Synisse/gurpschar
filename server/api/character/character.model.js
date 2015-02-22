'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CharacterSchema = new Schema({
  name: String,

  st: Number,
  dx: Number,
  iq: Number,
  ht: Number,

  hp: Number,
  will: Number,
  per: Number,
  fp: Number,

  languages: [{name: String, spoken: String, written: String}],

  advantages: [String],

  disadvantages: [String],

  skills: [String],

  owner: String,

  info: String,
  active: Boolean
});

module.exports = mongoose.model('Character', CharacterSchema);
