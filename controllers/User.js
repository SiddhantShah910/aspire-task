
const User = require('../models/User.js');
const Product = require('../models/Product.js');

async function createNewUser(req,res){
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch(error){
        res.status(400).json((error.message));
    }
}


async function getAllUsers(req, res){
    const users = await User.find();
    res.status(200).json(users);
}

async function createNewProduct(req,res){
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(user);
    } catch(error){
        res.status(400).json((error.message));
    }
}


async function getProductByID(req,res){
    const getProduct = Product.findById(req.params.id);
    if(getProduct){
        res.status(200).json(getProduct);
    }else{
        res.status(404).json({message:"Product not found"});
    }
}

module.exports = {createNewUser, createNewProduct, getProductByID, getAllUsers};