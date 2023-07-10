const mongoose = require('mongoose');

const userSchemna = mongoose.Schema(
    {
        name:{
            type:String,
             required:true
        },
        email:{
            type:String,
            required:false
        },
        passwordHash:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        address:{
            type:String,
            required:true
        },
        zip:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        }
    }
)
const User = mongoose.model('User', userSchemna);
module.exports = User;