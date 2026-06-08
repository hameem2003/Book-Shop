import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Cart(){

const navigate=useNavigate();
const [cart,setCart]=useState(

JSON.parse(
localStorage.getItem("cart")
)
||
[]

);





const removeItem=(index)=>{


const newCart=

cart.filter(

(item,i)=> i!==index

);



setCart(newCart);



localStorage.setItem(

"cart",

JSON.stringify(newCart)

);


}




const total = cart.reduce(

(sum,item)=>

sum + item.price,

0

);






return(


<div className="cart-page">


<h1>

Shopping Cart 🛒

</h1>





{

cart.length===0 ?

<p>

Your Cart Empty

</p>



:


<>


{

cart.map((item,index)=>(


<div

className="cart-item"

key={index}

>


<img src={item.image}/>



<div>


<h3>

{item.name}

</h3>



<p>

৳ {item.price}

</p>



<button

onClick={()=>removeItem(index)}

>

Remove

</button>



</div>



</div>


))


}




<h2>

Total: ৳ {total}

</h2>



<button

className="main-btn"

onClick={()=>navigate("/checkout")}

>

Checkout

</button>


</>


}




</div>



)


}



export default Cart;