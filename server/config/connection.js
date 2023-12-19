const mongoose = require('mongoose');


mongoose.connect(process.env.ATLAS || 'mongodb://127.0.0.1:27017/lunisol');


module.exports = mongoose.connection;