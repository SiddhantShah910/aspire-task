const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    first_name: String,
    last_name: String,
    mobile_number: Number,
    address: String
})

module.exports  = mongoose.model('User', userScheme);