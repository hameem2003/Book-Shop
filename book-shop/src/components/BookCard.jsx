function BookCard({book}){


const addCart=()=>{


let cart = JSON.parse(
localStorage.getItem("cart")
) || [];



cart.push(book);



localStorage.setItem(
"cart",
JSON.stringify(cart)
);



alert("Added To Cart 🛒");


};





return(

<div className="book-card">


<img src={book.image}/>


<h3>

{book.name}

</h3>



<p>

{book.author}

</p>



<h4>

৳ {book.price}

</h4>



<button

onClick={addCart}

>

Add Cart 🛒

</button>



</div>


);


}



export default BookCard;