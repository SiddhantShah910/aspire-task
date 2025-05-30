const {createNewUser, createNewProduct, getProductByID, getAllUsers} = require('../controllers/User.js');
const express = require('express');
const router = express.Router();


router.post('/user', createNewUser).post('/product', createNewProduct);
router.get('/product/:id', getProductByID);
router.get('/user', getAllUsers);
module.exports = router;
