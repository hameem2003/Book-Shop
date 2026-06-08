import { useState, useEffect } from "react";

import banner1 from "../assets/desktop_20_11_-mq27asb9-hbod.jpg";
import banner2 from "../assets/Desktop-mnznf3m3-8cmi.webp";
import banner3 from "../assets/hero.png";


function Banner(){


const banners=[

banner1,
banner2,
banner3

];


const [index,setIndex]=useState(0);


// AUTO CHANGE

useEffect(()=>{


const timer=setInterval(()=>{


setIndex(

prev => (prev + 1) % banners.length

);


},3000);



return ()=>clearInterval(timer);



},[]);




// Manual Next

const nextBanner=()=>{


setIndex(

(index+1)%banners.length

)


}



// Manual Previous

const prevBanner=()=>{


setIndex(

index===0 
? banners.length-1 
:index-1

)


}



return(


<div className="banner-box">


<img

src={banners[index]}

className="slider-image"

/>



<button

className="slide-btn prev"

onClick={prevBanner}

>

❮

</button>




<button

className="slide-btn next"

onClick={nextBanner}

>

❯

</button>





<div className="slider-dots">


{

banners.map((b,i)=>(


<span

key={i}

className={
index===i?
"dot active":
"dot"
}

onClick={()=>setIndex(i)}

>


</span>


))


}


</div>



</div>


)


}



export default Banner;