const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    product_name: String,
    product_price: Number,
    product_description: String,
    created_by: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    required:true},
})

module.exports  = mongoose.model('Product', productScheme);