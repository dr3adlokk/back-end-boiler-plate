// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Chirp = require('../models/chirpmodel.js')

// Routes
// =============================================================
module.exports = function (app) {
  // Get all chirps
  app.get('/api/all', function (req, res) {
    // var dbQuery = 'SELECT * FROM chirps'

    // connection.query(dbQuery, function (err, result) {
    //   if (err) throw err
    //   res.json(result)
    // })
    Chirp.findAll({}).then(function (r) {
      console.log(r)
    })
  })

  // Add a chirp
  app.post('/api/new', function (req, res) {
    // console.log('Chirp Data:')
    // console.log(req.body)

    // var dbQuery = 'INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)'

    // connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function (err, result) {
    //   if (err) throw err
    //   console.log('Chirp Successfully Saved!')
    //   res.end()
    // })
    Chirp.create({author: req.body.author, body: req.body.body}).then(function (r) {
      console.log('Success!')
    })
  })
}
