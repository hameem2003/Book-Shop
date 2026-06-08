const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();


const app = express();


app.use(cors());
app.use(express.json());

const bookRoutes=require("./routes/bookRoutes");


app.use(
"/api/books",
bookRoutes
);

// MongoDB connect

mongoose.connect(process.env.MONGO_URL)


.then(()=>{

console.log("MongoDB Connected ✅");

})


.catch((err)=>{

console.log(err);

});





app.get("/",(req,res)=>{


res.send("Book API Running 🚀");


});




app.listen(5000,()=>{


console.log("Server Running 5000");


});