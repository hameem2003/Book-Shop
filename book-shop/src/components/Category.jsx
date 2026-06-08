function Category(){

const data=[
"📘 Academic",
"💻 Programming",
"📖 Novel",
"🕌 Islamic",
"👦 Kids",
"✏ Stationery"
];


return(

<div className="category">

<h2>Shop By Category</h2>


<div className="category-grid">


{

data.map((item,i)=>(


<div className="cat-card" key={i}>

{item}

</div>


))

}


</div>


</div>

)

}


export default Category;