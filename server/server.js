const express = require('express')
const path = require('path');
const routes = require('./routes');
const db =  require('./config/connection')
require('dotenv').config();


// stripe
// const stripe = require("stripe")('sk_test_51ONh8QIh5BoOs8BLzvdAEtzmvhsHW4Xy0UoA61IVFi3DillekOb1Orh4dx15J4xmEF73K9tPilcmvk7L6Gu9Z4az00tbs6nFJM')
// const domain = 'http://localhost:3001'
// const bodyParser = require("body-parser")
// const cors = require("cors")



const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// stripe
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(cors())

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname , '../client/build')))
}

app.use(routes)

db.once('open', ()=> {
    app.listen(PORT, () => console.log('server running on port 3001'))
})