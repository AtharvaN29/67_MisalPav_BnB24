const mongoose=require('mongoose');
const CartSchema=new mongoose.Schema({
    userId:String,
    productId:String,
    count:Number,
    name:String,
                            company_name:String,
                            category:String,
                            description:String,
                            raw_material:String,
                            manufacturing_practices:String,
                            usp:String, 
                            price:String,
                            img:String
});

module.exports=mongoose.model('cart',CartSchema);