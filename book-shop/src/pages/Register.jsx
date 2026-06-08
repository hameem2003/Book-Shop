import {useState} from "react";

import {useNavigate} from "react-router-dom";



function Register(){


const navigate=useNavigate();



const [user,setUser]=useState({

first:"",
last:"",
email:"",
phone:"",
password:""

});





const register=()=>{


localStorage.setItem(

"user",

JSON.stringify(user)

);


alert("Account Created");


navigate("/login");


}





return(


<div className="auth-page">


<div className="auth-box">


<h2>

Register Account

</h2>



<div className="name-row">


<div>

<label>
First Name *
</label>


<input

placeholder="First Name"

onChange={(e)=>

setUser({...user,first:e.target.value})

}

/>

</div>



<div>


<label>
Last Name *
</label>


<input

placeholder="Last Name"


onChange={(e)=>

setUser({...user,last:e.target.value})

}

/>


</div>


</div>





<label>

E-Mail *

</label>


<input

placeholder="E-Mail"


onChange={(e)=>

setUser({...user,email:e.target.value})

}

/>




<label>

Telephone *

</label>


<input

placeholder="Telephone"


onChange={(e)=>

setUser({...user,phone:e.target.value})

}

/>




<label>

Password *

</label>


<input

type="password"

placeholder="Password"


onChange={(e)=>

setUser({...user,password:e.target.value})

}

/>





<div className="policy">


<input type="checkbox"/>


<p>

I have read and agree to

<span> Privacy Policy</span>


</p>



</div>




<button

className="main-btn"

onClick={register}

>

Continue

</button>






<div className="line">


<span>

Already have an account?

</span>


</div>

<span>If you already have an account with us, please login at the</span>

<p

className="login-link"

onClick={()=>navigate("/login")}

>

Login page

</p>





</div>


</div>


)


}



export default Register;