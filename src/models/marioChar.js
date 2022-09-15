const mongoose = require('mongoose');

const marioChar = new mongoose.Schema({         
    name:{type:String,required:true},
    weight:{type:Number,required:true}
},{versionKey:false});

const marioModel = new mongoose.model('mariochar',marioChar);

module.exports = marioModel;