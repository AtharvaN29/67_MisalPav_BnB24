const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
        username:String,
        password:String,
        balance:Number
});
module.exports = mongoose.model('users',UserSchema);