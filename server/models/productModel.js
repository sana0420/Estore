const mongoose = require('mongoose');

const productSchemna = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        category: {
            type: String,
            required: true
        },
        subcategory:{
            type:String,
            required:false
        },
        subcategory2:{
            type:String,
            required:false
        },
        image: {
            type:String,
            required:true
        },
        size:{
            type:Array,
            required:false
        },
        price: {
            type: Number,
            required: true
        },
        saleprice:{
            type:Number,
            required:false
        },
        material: {
            type: Array,
            required: false
        }
    }
)
const Product = mongoose.model('Product', productSchemna);
module.exports = Product;
