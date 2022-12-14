// Stays cần lưu: PID (unique), Product_name, price
const mongoose=require('mongoose')
const Schema=mongoose.Schema
const slug=require('mongoose-slug-generator')
mongoose.plugin(slug);
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
    },
    room:{
        type:Rooms,
        required:true,
    },
    slug:{
        type:String,
        slug:'id',
    }
})
module.exports=mongoose.model('Stays',Stays)