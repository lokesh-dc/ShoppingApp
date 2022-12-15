const mongoose = require("mongoose");

const dbConnect = () =>{
    mongoose.set("strictQuery", false);
    return mongoose.connect("mongodb+srv://lokesh:Prashant@shoppingdatabase.pn7wkbm.mongodb.net/database");
}

module.exports = dbConnect;