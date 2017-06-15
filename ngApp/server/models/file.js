const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: String,
    email: {
        type: String,
        lowercase: true
    },
    filepath: String,
});

module.exports = mongoose.model('file', fileSchema, 'Files.files');