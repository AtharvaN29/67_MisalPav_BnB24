const mongoose=require('mongoose');
const ProducerSchema=new mongoose.Schema({
    username:String,
    password:String,
    company_name:String,
    gstin:String
});

module.exports=mongoose.model('producer',ProducerSchema);