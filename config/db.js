const mongoose = require('mongoose');

const config = require('config');

const db = config.get('mongoURI');

const {createIndexes} = require('../models/User')


const connectDB = async() =>{
    try{
        await mongoose.connect(db , {
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        });
        console.log('Finally i m connected');
    }catch(err){
        console.log(err.message);
        process.exit(1); 
    }
}

module.exports = connectDB;