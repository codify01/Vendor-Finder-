const express  = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

URI = process.env.URI
const PORT = process.env.PORT || 3000






















app.listen(PORT, ()=>{
    mongoose.connect(URI)
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{ 
        console.log('not connected');
        console.log(err.message);
    })
})
