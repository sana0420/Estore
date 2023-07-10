<<<<<<< Updated upstream
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
=======
const express = require("express");
const mongoose = require("mongoose");
const config=require ("./config");
const Product = require('./models/productModel');
const User = require('./models/userModel');
const cors=require("cors");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const authJwt=require('./helpers/jwt');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const app = express();
require("dotenv").config();
 // Use this after the variable declaration
//to use form
app.use(cors());
app.options('*', cors())
//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(express.urlencoded({extended:false}))

app.use(express.json())
//app.use(authJwt)

app.get('/api', (req,res) => {
    res.send("hello my name is sana")
})
app.get('/blog', (req, res) => {
    res.send("hello blog my name is sana");
})
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
//Users
app.post('/users',async(req,res)=>{
    let user=new User({
        name:req.body.name,
        email:req.body.email,
        passwordHash:bcrypt.hashSync(req.body.password,10),
        phone:req.body.phone,
        isAdmin:req.body.isAdmin,
        address:req.body.address,
        zip:req.body.zip,
        city:req.body.city,
    })
    user=await user.save();
})
//get
app.get("/getallusers",async(req,res)=>{
    try{
        const users=await User.find({}).select('-passworHash');
        res.send({status:"ok",data: users});
    } catch (error) {
        console.log(error.message);
    }
})
//delete
app.delete('/users/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message:`cannot find user with id ${id}`})
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
//get user  by id
app.get('/users/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findById(id).select('-passwordHash');
        if(!user){
            return res.status(404).json({message:`cannot find user with id ${id}`})
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
//update or edit
app.put('/users/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const user = await User.findByIdAndUpdate(id,req.body);
        if(!user){
            return res.status(404).json({message:`cannot find any user with id ${id}`});
        }
        const updatedUser= await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
// get all data from api
app.get('/users', async(req, res) => {
    try {
        const users = await User.find({}).select('-passwordHash');
        res.send({status:"ok",data: users});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
//login
app.post('/users/login',async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        const secret=process.env.secret;
        if(!user){
            return res.status(400).send("user does not exist")
        }
        if(user && bcrypt.compareSync(req.body.password,user.passwordHash)){
            const token=jwt.sign({
                userId:user.id,
                isAdmin: user.isAdmin
            },
            secret,
            {expiresIn:'1d'}
            )
            return res.status(200).send({user: user.email , token:token})
        }else{
            return res.status(400).send("password is wrong")
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
//get users
app.get('/users/login',async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        const secret=process.env.secret;
        if(!user){
            return res.status(400).send("user does not exist")
        }
        if(user && bcrypt.compareSync(req.body.password,user.passwordHash)){
            const token=jwt.sign({
                userId:user.id,
                isAdmin: user.isAdmin
            },
            secret,
            {expiresIn:'1d'}
            )
            return res.status(200).send({user: user.email , token:token})
        }else{
            return res.status(400).send("password is wrong")
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
config();
app.listen(3000, () => {
    console.log("Node Api app is running on port 3000");
})
>>>>>>> Stashed changes
