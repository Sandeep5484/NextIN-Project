const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required: true,
        minLength: 3
    },
    email:{
        type : String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please Enter a Valid email id")
            }
        }
    },
    phone:{
        type : String,
        required: [true, 'User phone number required'],
        minLength: [10, 'Phone number should contain at least ten digits!']
    },
    message:{
        type : String,
        required: true,
        minLength: [3, 'Message should contain at least three characters!']
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// we need to create a collection

const User = mongoose.model("User",userSchema);

module.exports = User;