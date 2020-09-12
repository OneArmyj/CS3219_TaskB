// guitaristModel.js
var mongoose = require('mongoose');
// Setup schema
var guitaristSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    guitar: {
        type: String,
        required: true
    },
    age: String,
    band: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export guitarist model
var Guitarist = module.exports = mongoose.model('guitarist', guitaristSchema);
module.exports.get = function (callback, limit) {
    Guitarist.find(callback).limit(limit);
}
