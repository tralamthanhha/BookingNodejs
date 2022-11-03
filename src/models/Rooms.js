const mongoose=require('mongoose')
const Schema=mongoose.Schema
const slug=require('mongoose-slug-generator')
mongoose.plugin(slug);
const Rooms=new Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    isReserved:{
        type:Boolean,
        required:true,
    },
    img:{
        type:String,
    },
    kind:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        slug:'id',
    }
})
module.exports=mongoose.model('Rooms',Rooms)