const mongoose=require('mongoose');
const CartSchema=new mongoose.Schema({
    userId:String,
    productId:String
});

module.exports=mongoose.model('cart',CartSchema);