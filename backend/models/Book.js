const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({


name:{
type:String,
required:true
},


author:{
type:String,
required:true
},


price:{
type:Number,
required:true
},


image:{
type:String
},


category:{
type:String
},


stock:{

type:Number,

default:10

}


},
{
timestamps:true
}

);



module.exports = mongoose.model(
"Book",
bookSchema
);