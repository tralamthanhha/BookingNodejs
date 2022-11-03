const mongoose=require('mongoose')
const Schema=mongoose.Schema
const slug=require('mongoose-slug-generator')
mongoose.plugin(slug);
const Restaurants=new Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    tables:{
        type:Number,
        required:true,
    },
    fanpage:{
        type:String,
        required:true,
    },
    phone:{
        type: Number,
        required:true,
        unique:true,
    },
    address:
    {
        type:String,
        required:true,
    },
    birthdate:
    {
        type:Date,
        required:true,
    },
    description:
    {
        type:String, 
        required:true,
    },
    slug:{
        type:String,
        slug:'id',
    }
})
module.exports=mongoose.model('Restaurants',Restaurants)