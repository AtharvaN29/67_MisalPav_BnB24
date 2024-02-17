const mongoose=require('mongoose');
const ProductSchema=mongoose.Schema({
       name:String,
       company_name:String,
       category:String,
       description:String,
       raw_material:String,
       manufacturing_practices:String,
       usp:String, 
       image:{
        type:String
       }
});
module.exports = mongoose.model('product',ProductSchema);