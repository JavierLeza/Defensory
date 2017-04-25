const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    title: String,
    url: String,
    description: String
});

module.exports = mongoose.model('file', fileSchema, 'files');