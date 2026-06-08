import {useEffect, useState} from "react";
import axios from "axios";


function Admin(){


const [book,setBook]=useState({

name:"",
author:"",
price:"",
image:""

});


const [books,setBooks]=useState([]);



// load books

const getBooks=async()=>{


const res = await axios.get(
"http://localhost:5000/api/books"
);


setBooks(res.data);


};



useEffect(()=>{

getBooks();

},[]);





// add book

const addBook=async()=>{


await axios.post(

"http://localhost:5000/api/books",

book

);



alert("Book Added");


setBook({

name:"",
author:"",
price:"",
image:""

});



getBooks();


};






// delete

const deleteBook=async(id)=>{


await axios.delete(

`http://localhost:5000/api/books/${id}`

);



getBooks();


};







return(

<div className="admin">


<h1>
Admin Dashboard
</h1>




<div className="admin-form">


<input

placeholder="Book Name"

value={book.name}

onChange={(e)=>

setBook({...book,name:e.target.value})

}

/>



<input

placeholder="Author"

value={book.author}

onChange={(e)=>

setBook({...book,author:e.target.value})

}

/>




<input

placeholder="Price"

value={book.price}

onChange={(e)=>

setBook({...book,price:e.target.value})

}

/>




<input

placeholder="Image URL"

value={book.image}

onChange={(e)=>

setBook({...book,image:e.target.value})

}

/>




<button onClick={addBook}>

Add Book

</button>



</div>







<h2>
Books Database
</h2>





<div className="admin-books">


{


books.map((item)=>(


<div

className="admin-card"

key={item._id}

>


<img src={item.image}/>


<h3>{item.name}</h3>


<p>{item.author}</p>


<h4>

৳ {item.price}

</h4>



<button

onClick={()=>deleteBook(item._id)}

>

Delete

</button>



</div>


))

}



</div>



</div>


)


}


export default Admin;