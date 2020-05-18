const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema ({
    name: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String}
});

module.exports = mongoose.model ('Client', ClientSchema);