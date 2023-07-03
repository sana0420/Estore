const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/productModel');
const cors=require("cors");
const app = express();

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
//to use form
app.use(express.urlencoded({extended:false}))

app.use(express.json())
//route

app.get('/api', (req,res) => {
    res.send("hello my name is sana")
})
app.get('/blog', (req, res) => {
    res.send("hello blog my name is sana");
})
// get all data from api
app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
//get by id
app.get('/products/:id', async(req, res) => {
    try {
        const {id}=req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
//save data
app.post('/products', async (req, res) => {
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
//update or edit
app.put('/products/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:`cannot find any product with id ${id}`});
        }
        const updatedProduct= await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
//delete
app.delete('/products/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:`cannot find product with id ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
app.get("/getallproducts",async(req,res)=>{
    try{
        const products=await Product.find({});
        res.send({status:"ok",data: products});
    } catch (error) {
        console.log(error.message);
    }
})
const mongoDb = async () => {
    await mongoose.connect('mongodb+srv://admin:sana1999@final-project.cgznjk9.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            console.log("connected TO MongoDB");
            app.listen(3000, () => {
                console.log("Node Api app is running on port 3000");
            });
        })
        .catch((error) => {
            console.error(error);
        })
}
mongoDb();