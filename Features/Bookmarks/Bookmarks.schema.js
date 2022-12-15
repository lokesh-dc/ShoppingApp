const mongoose = require("mongoose");


const bookmarkSchema = new mongoose.Schema({
    productId : { type : mongoose.Schema.Types.ObjectId, ref:"product"},
})

const bookmarkModel = mongoose.model("bookmark", bookmarkSchema);


module.exports = bookmarkModel;