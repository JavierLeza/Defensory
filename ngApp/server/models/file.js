const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename: String
});

module.exports = mongoose.model('file', fileSchema, 'Files.files');