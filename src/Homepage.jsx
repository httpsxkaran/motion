import React, { useEffect, useState } from 'react'
import Cart2 from './componenets/Cart2';
import Navbar from './componenets/Navbar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './componenets/Home';
import About from './componenets/About';
import Contact from './componenets/Contact';
import Incart from './componenets/Incart';

function Homepage() {
  const [val, setVal]= useState([]);
  const [cart, setCart]= useState([]);
  const [qnt, setQnt] = useState(0);
  async function fetchData() {
    let result = await fetch("https://fakestoreapiserver.reactbd.org/api/products/");
    let data = await result.json();
    console.log(data);
    setVal(data.data);
    console.log(val)
  }
  useEffect(()=>{
    fetchData();
  },[])

    return (
    <div className='pt-16'>
        
        <BrowserRouter>
        <Navbar cart={cart}></Navbar>
        <Routes>
            <Route path='/home1' element ={<Home></Home>}/>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            {/* <Route path='/'></Route> */}
            <Route path='/' element={<Cart2 val = {val} setVal={setVal} cart={cart} setCart={setCart} qnt = {qnt} setQnt={setQnt} ></Cart2>}></Route>
            <Route path='/Incart' element={<Incart cart={cart} setCart= {setCart} val ={val} setVal={setVal}></Incart>}></Route>
        </Routes>
         
        </BrowserRouter>
        
       
    </div>
  )
}

export default Homepage