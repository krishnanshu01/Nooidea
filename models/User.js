const { number } = require('assert-plus');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
   
    Email : {
        type : String,
        required : true,
        unique : true
    },
    Phone : {
        type : Number,
        require : true,

    },
    Address : {
        type : String,
        required : true
    },
    
    date : {
        type : Date,
        Default : Date.now
    }
});
module.exports = user = mongoose.model('user' , UserSchema); //takes two arguments one is file name and second is schema name