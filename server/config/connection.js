require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_LOCAL);


module.exports = mongoose.connection;