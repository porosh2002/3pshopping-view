const mongoose = require('mongoose');
const RegisterUserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        minlength:12,
        unique:true,
        maxlength:50
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    }
});
const RegisterUserModel = mongoose.model('User', RegisterUserSchema);
module.exports = RegisterUserModel;