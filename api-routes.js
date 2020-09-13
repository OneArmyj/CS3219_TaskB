// api-routes.js

// Initialize express router
let router = require('express').Router();

// Set default API response at http://localhost:8080/api 
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Guitarist crafted with love!',
    });
});

// Import guitarist guitaristController
var guitaristController = require('./controller/guitaristController');

// Guitarist routes
router.route('/guitarists')
    .get(guitaristController.index) // get all guitarists
    .post(guitaristController.new); // adds new guitarist
router.route('/guitarists/:guitarist_name')
    .get(guitaristController.view) // get a particular guitarist
    .patch(guitaristController.update) // edit a particular guitarist
    .put(guitaristController.update) // edit a particular guitarist
    .delete(guitaristController.delete); // delete a particular guitarist

// Export API routes
module.exports = router;