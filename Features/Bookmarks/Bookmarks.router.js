const express = require("express");

const app = express.Router();


const bookmarkModel = require("./Bookmarks.schema");

app.get("/", async (req, res)=>{
    let bookmarks = await bookmarkModel.find().populate("productId");
    res.send(bookmarks);
})


app.post("/", async (req, res)=>{
    const {productId} = req.body;
    try{
        let isBookmarked = await bookmarkModel.findOne({productId});
        if(isBookmarked){
            return res.send({status: false, message: "Product already added"});
        }
        let date = new Date().toLocaleDateString()
        await bookmarkModel.create({productId});
        res.send({status: true, message: "Product bookmarked successfully" });
    }catch(e){
        res.status(500).send({status: false, message:e.message});
    }
})



module.exports = app;