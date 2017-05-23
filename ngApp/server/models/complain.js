const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const complainSchema = new Schema({
    name: String,
    lastName: String,
    request: String,
    email: String,
    topic: String,
    reason: String,
    answer: String
});

module.exports = mongoose.model('complain', complainSchema, 'complains');