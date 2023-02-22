const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


// Building a connection between server(Nodejs) and database

mongoose.connect("mongodb://localhost:27017/businessdb").then(()=>{
    console.log("connection is successful");
}).catch((err)=>{
    console.log("No connection");
})