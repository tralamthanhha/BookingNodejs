// Stays cần lưu: PID (unique), Product_name, price
const mongoose=require('mongoose')
const Schema=mongoose.Schema
const Stays=new Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
    },
    kind:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model('Stays',Stays)