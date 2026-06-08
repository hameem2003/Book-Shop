import {useState} from "react";

import {useNavigate} from "react-router-dom";


function Checkout(){


const navigate = useNavigate();


const [info,setInfo]=useState({

name:"",
phone:"",
address:""

});



const placeOrder=()=>{


if(
!info.name ||
!info.phone ||
!info.address
){

alert("Fill all information");

return;

}



const cart = JSON.parse(
localStorage.getItem("cart")
)||[];




const order={

customer:info,

books:cart,

date:new Date()

};




localStorage.setItem(

"order",

JSON.stringify(order)

);



localStorage.removeItem("cart");



alert("Order Successful 🎉");


navigate("/");


}





return(


<div className="checkout">


<h1>

Checkout

</h1>



<input

placeholder="Full Name"

onChange={(e)=>

setInfo({...info,name:e.target.value})

}

/>



<input

placeholder="Phone Number"

onChange={(e)=>

setInfo({...info,phone:e.target.value})

}

/>



<textarea

placeholder="Delivery Address"


onChange={(e)=>

setInfo({...info,address:e.target.value})

}

>



</textarea>



<button

onClick={placeOrder}

>

Confirm Order

</button>



</div>


)


}



export default Checkout;