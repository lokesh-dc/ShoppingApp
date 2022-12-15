const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    title : {type: String, required: true},
    quantity : {type:Number, required: true},
    priority : {type:Number, required: true},
    timeStamp : {type: String },
})

const productModel = mongoose.model("product", productSchema);


module.exports = productModel;