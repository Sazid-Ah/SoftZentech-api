const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: String,
    phone: String,
    service: String
}, { timestamps: true });

module.exports = mongoose.model('FormData', formDataSchema);
