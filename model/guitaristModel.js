// guitaristModel.js
var mongoose = require('mongoose');

// Setup schema
// _id is set to true by default
var guitaristSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    guitar: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true,
    },
    band: String,
    create_date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Export guitarist model
var Guitarist = module.exports = mongoose.model('guitarist', guitaristSchema);
module.exports.get = function (callback, limit) {
    Guitarist.find(callback).limit(limit);
}
