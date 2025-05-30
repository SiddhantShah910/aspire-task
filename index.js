const express  = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

app.use(express.json());

const userRoutes = require('./routes/userroutes.js');
mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
    console.log("MongoDB Connected")
});

app.use('/', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



