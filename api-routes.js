// api-routes.js

// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Guitarist crafted with love!',
    });
});

// Import guitarist guitaristController
var guitaristController = require('./guitarist/guitaristController');

// Guitarist routes
router.route('/guitarists')
    .get(guitaristController.index)
    .post(guitaristController.new);
router.route('/guitarists/:guitarist_id')
    .get(guitaristController.view)    
    .patch(guitaristController.update)
    .put(guitaristController.update)
    .delete(guitaristController.delete);

// Export API routes
module.exports = router;