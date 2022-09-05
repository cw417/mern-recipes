const express = require('express');
const recipeRoutes = express.Router();
const dbo = require('../db/conn');
const ObjectId = require('mongodb').ObjectId;
 
// Get a list of all the recipes.
recipeRoutes.route('/recipe').get(function (req, res) {
  let db_connect = dbo.getDb('reviews');
  db_connect
    .collection('recipes')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
 
// Get a single recipe by id
recipeRoutes.route('/recipe/:id').get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection('recipes')
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
 
// Create a new recipe.
recipeRoutes.route('/recipe/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    type: req.body.type,
    info: req.body.info,
  };
  db_connect.collection('recipes').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});
 
// Update a recipe by id.
recipeRoutes.route('/update/:id').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      type: req.body.type,
      info: req.body.info,
    },
  };
  db_connect
    .collection('recipes')
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log('1 document updated');
      response.json(res);
    });
});
 
// Delete a recipe
recipeRoutes.route('/:id').delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('recipes').deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log('1 document deleted');
    response.json(obj);
  });
});
 
module.exports = recipeRoutes;