import {

Routes,
Route

} from "react-router-dom";


import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

import Menu from "./components/Menu";

import Footer from "./components/Footer";

import Checkout from "./pages/Checkout";

import Home from "./pages/Home";

import Cart from "./pages/Cart";

import Login from "./pages/Login";

import Register from "./pages/Register";



import "./App.css";



function App(){


return(

<>


<Navbar/>


<Menu/>




<Routes>



<Route

path="/"

element={<Home/>}

/>



<Route

path="/cart"

element={<Cart/>}

/>

<Route

path="/admin"

element={<Admin/>}

/>

<Route

path="/login"

element={<Login/>}

/>



<Route

path="/register"

element={<Register/>}

/>

<Route

path="/checkout"

element={<Checkout/>}

/>

</Routes>



<Footer/>



</>


)


}



export default App;