const express = require("express");
const cors = require("cors");
const dbConnect = require("./Config/dbConnect");

const app = express();
app.use(express.json());
app.use(cors());

const productsRouter = require("./Features/Products/Products.router");
const bookmarkRouter = require("./Features/Bookmarks/Bookmarks.router");

app.use("/products", productsRouter);
app.use("/bookmarks", bookmarkRouter)
app.get("/", async (req, res) =>{
    res.send("Shopping List App");
})

app.listen((8000), async ()=>{
    await dbConnect();
    console.log("Server started on http://localhost:8000");
})
