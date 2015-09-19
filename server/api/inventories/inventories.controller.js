'use strict';

var _ = require('lodash');
var Inventories = require('./inventories.model');

// Get list of inventoriess
exports.index = function(req, res) {
  Inventories.find(function (err, inventoriess) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(inventoriess);
  });
};

// Get a single inventories
exports.show = function(req, res) {
  Inventories.findById(req.params.id, function (err, inventories) {
    if(err) { return handleError(res, err); }
    if(!inventories) { return res.status(404).send('Not Found'); }
    return res.json(inventories);
  });
};

// Creates a new inventories in the DB.
exports.create = function(req, res) {
  Inventories.create(req.body, function(err, inventories) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(inventories);
  });
};

// Updates an existing inventories in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Inventories.findById(req.params.id, function (err, inventories) {
    if (err) { return handleError(res, err); }
    if(!inventories) { return res.status(404).send('Not Found'); }
    var updated = _.merge(inventories, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(inventories);
    });
  });
};

// Deletes a inventories from the DB.
exports.destroy = function(req, res) {
  Inventories.findById(req.params.id, function (err, inventories) {
    if(err) { return handleError(res, err); }
    if(!inventories) { return res.status(404).send('Not Found'); }
    inventories.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}