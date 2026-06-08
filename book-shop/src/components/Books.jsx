import {useEffect,useState} from "react";

import axios from "axios";

import BookCard from "./BookCard";



function Books(){


const [books,setBooks]=useState([]);




useEffect(()=>{


axios.get(

"http://localhost:5000/api/books"

)

.then((res)=>{


setBooks(res.data);


});


},[]);






return(


<div className="books-section">


<h2>

Latest Books

</h2>




<div className="book-grid">


{


books.map((book)=>(


<BookCard

key={book._id}

book={book}

/>


))


}



</div>



</div>


)


}



export default Books;