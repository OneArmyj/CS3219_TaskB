// guitaristController.js
// Import guitarist model
var Guitarist = require('../model/guitaristModel');

// Handle index actions
// Postman: GET to http://localhost:8080/api/guitarists, and SEND
exports.index = function (req, res) {
    Guitarist.get(function (err, guitarists) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Guitarists information retrieved successfully",
            data: guitarists
        });
    });
};

// Handle create guitarist actions
// Postman: POST to http://localhost:8080/api/guitarists, with BODY and key:value
exports.new = function (req, res) {
    var guitarist = new Guitarist();
    guitarist.name = req.body.name.trim();
    guitarist.guitar = req.body.guitar.trim();
    guitarist.band = req.body.band.trim();
    guitarist.age = req.body.age.trim();
    // save the guitarist and check for errors
    guitarist.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New guitarist added!',
            data: guitarist
        });
    });
};

// Handle view guitarist info
// Postman: GET to http://localhost:8080/api/guitarists/guitarist_id, and send
exports.view = function (req, res) {
    Guitarist.findOne({ name: req.params.guitarist_name }, function (err, guitarist) {
        if (err)
            res.send(err);
        res.json({
            message: guitarist.name + ' details loading..',
            data: guitarist
        });
    });
};

// Handle update guitarist info
// Postman: PUT to http://localhost:8080/api/guitarists/guitarist_id, with BODY and key:value
exports.update = function (req, res) {
    Guitarist.findOne({ name: req.params.guitarist_name }, function (err, guitarist) {
        if (err)
            res.send(err);
        guitarist.name = req.body.name ? req.body.name.trim() : guitarist.name;
        guitarist.guitar = req.body.guitar ? req.body.guitar.trim() : guitarist.guitar;
        guitarist.band = req.body.band ? req.body.band.trim() : guitarist.band;
        guitarist.age = req.body.age ? req.body.age.trim() : guitarist.age;
        // save the guitarist and check for errors
        guitarist.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: req.params.guitarist_name + ' information edited',
                data: guitarist
            });
        });
    });
};

// Handle delete guitarist
// Postman: DELETE to http://localhost:8080/api/guitarists/guitarist_id, and send
exports.delete = function (req, res) {
    Guitarist.findOneAndDelete({ name: req.params.guitarist_name }, function (err, guitarist) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: req.params.guitarist_name + ' deleted'
        });
    });
};
