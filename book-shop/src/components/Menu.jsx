import { useNavigate } from "react-router-dom";


function Menu(){


const navigate = useNavigate();


return(

<div className="menu">


<a onClick={()=>navigate("/")}>
Home
</a>


<a onClick={()=>navigate("/books")}>
Books
</a>


<a onClick={()=>navigate("/category")}>
Categories
</a>


<a onClick={()=>navigate("/authors")}>
Authors
</a>


<a onClick={()=>navigate("/offers")}>
Offers
</a>


<a onClick={()=>navigate("/contact")}>
Contact
</a>


</div>

)

}


export default Menu;