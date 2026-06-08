import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){


const navigate = useNavigate();


const [login,setLogin]=useState({

email:"",
password:""

});



const handleLogin=()=>{


const savedUser = JSON.parse(
localStorage.getItem("user")
);


if(!savedUser){

alert("Please create account first");
return;

}



if(
savedUser.email===login.email &&
savedUser.password===login.password
){


localStorage.setItem("isLogin","true");


alert("Login Success");


navigate("/");


}

else{

alert("Wrong Information");

}


}




return(

<div className="auth-page">


<div className="auth-box">


<h2>
Account Login
</h2>



<label>
Phone / E-Mail
</label>


<input

placeholder="Phone or Email"

onChange={(e)=>

setLogin({...login,email:e.target.value})

}

/>




<div className="password-row">


<label>Password</label>


<span>
Forgotten Password?
</span>


</div>




<input

type="password"

placeholder="Password"


onChange={(e)=>

setLogin({...login,password:e.target.value})

}

/>



<button

className="main-btn"

onClick={handleLogin}

>

Login

</button>





<div className="line">


<span>
Don't have an account?
</span>


</div>




<button

className="outline-btn"

onClick={()=>navigate("/register")}

>

Create Your Account

</button>




</div>


</div>

)


}



export default Login;