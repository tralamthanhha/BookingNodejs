const mongoose=require('mongoose')
const Schema=mongoose.Schema
const slug=require('mongoose-slug-generator')
mongoose.plugin(slug);
const Accounts=new Schema({
    email:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    fullname:{
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
    kind:
    {
        type:String, 
        required:true,
    },
    slug:{
        type:String,
        slug:'fullname',
    }
})
module.exports=mongoose.model('Accounts',Accounts)