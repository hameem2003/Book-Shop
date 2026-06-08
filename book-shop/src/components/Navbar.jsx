import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar(){
const navigate = useNavigate();
const [search,setSearch] = useState("");



const handleSearch = ()=>{


if(search.trim()===""){

alert("Please enter book name");

return;

}


alert("Searching for: " + search);


// later we connect database here


}
return(

<div className="navbar">


<div className="logo">
BOOK SHOP
</div>


<input 
className="search"
type="text"

placeholder="Search your book..."

value={search}

onChange={(e)=>setSearch(e.target.value)}


onKeyDown={(e)=>{

if(e.key==="Enter"){

handleSearch();

}

}}


/>
<button

className="search-btn"

onClick={handleSearch}

>
 🔍   
</button>

<div>
<button
onClick={()=>navigate("/login")}
>

Login

</button>



<button
onClick={()=>navigate("/cart")}
>

Cart 🛒

</button>

</div>


</div>

)

}


export default Navbar;