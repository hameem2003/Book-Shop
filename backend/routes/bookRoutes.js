const express=require("express");

const router=express.Router();


const Book=require("../models/Book");



// ADD BOOK

router.post("/",async(req,res)=>{


try{


const book = await Book.create(req.body);


res.json(book);



}

catch(error){


res.status(500).json(error);


}



});




// GET BOOKS


router.get("/",async(req,res)=>{


const books = await Book.find();


res.json(books);


});






// DELETE BOOK


router.delete("/:id",async(req,res)=>{


await Book.findByIdAndDelete(
req.params.id
);



res.json({

message:"Book Deleted"

});


});





module.exports=router;