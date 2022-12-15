const express = require("express");

const app = express.Router();


const productModel = require("./Products.schema");

app.get("/", async (req, res)=>{
    let products = await productModel.find();
    res.send(products);
})


app.post("/", async (req, res)=>{
    let {title, quantity, priority} = req.body;
    try{
        let date = new Date().toLocaleDateString()
        await productModel.create({title, quantity, priority, timeStamp: date});
        res.send({status: true, message: "Product created successfully" });
    }catch(e){
        res.status(500).send({status: false, message:e.message});
    }
})


app.delete("/:id", async (req, res)=> {
    const {id} = req.params;
    try{
        await productModel.findByIdAndDelete(id);
        res.send({status: true, message: "Product deleted successfully" });
    }catch(e){
        res.status(500).send({status: false, message:e.message});
    }

})

module.exports = app;