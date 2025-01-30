const mongoose = require("mongoose");
const validator = require("validator");

const reservationSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minLength : [3,"First name must contains at least 3 character"],
        maxLength : [30,"First name cannot exceed 30 characters!"],
    },
    lastname:{
        type:String,
        required:true,
        minLength:[3,"Last name must contain at least 3 characters!"],
        maxLength: [30,"Last name cannot exceed 30 characters!"],
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail,"Provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number must contain only 10 digits!"],
        maxLength: [10,"Phone number must contain only 10 digits!"],
    },
    time:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model("Reservation", reservationSchema);