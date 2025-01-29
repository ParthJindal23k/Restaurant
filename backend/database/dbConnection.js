const mongoose = require("mongoose");

const dbConnection = async () =>{
    const MONGO_URI = "mongodb+srv://parthjindal23316:zVaADfrl0XmdoRn6@cluster0.s9pch.mongodb.net/?retryWrites=true";
    await mongoose.connect(MONGO_URI, { 
        dbName:"RESTAURANT"
     }).then(()=>{
        console.log("connected to database succesfully");
     }).catch(err => {
        console.log("Some error occured while connecting to database")
     })
     
     ;
}

module.exports = { dbConnection };