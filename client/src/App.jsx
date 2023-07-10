<<<<<<< Updated upstream
import { useState,useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Sale from './components/Sale';
function App() {
  const [userdata, setUserdata] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/getallproducts",{
      method:"GET",
    })
    .then(
      (res)=>res.json()
    ).then(
      (data)=>{
        setUserdata(data.data)
      }
    )
  },[])
  //console.log(userdata[0]);
  const d=userdata.map(item=>{
    return (
      <div key={item.id}>
        <p>{item.price}</p>
      </div>
    )
  })
  return (
    <>
      <p className='text-dark'>THIS IS MY DATA THAT I CREATED IN NODE JS{d}</p>
    </>
=======
import { useState, useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './Home';
import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sale from './Sale';
import New from './New';
import Footer from './components/Footer';
import Relax from './Relax';
import Clothes from './Clothes';
import Denim from './Denim';
import TermsofServices from './FooterLinks/TermsofServices'
import Shirts from './Shirts';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';
import axios from 'axios';
import Singleproduct from './Singleproduct';
function App() {
  const [productdata, setProductdata] = useState([]);
  const [userdata, setUserdata] = useState([]);
  const fetchdata1=async()=>{
   await axios.get("http://localhost:3000/getallproducts")
      .then(response=> setProductdata(response.data.data)
      ).catch(error => {
        console.error(error);
      });
  }
  const fetchdata2=()=>{
    axios.get("http://localhost:3000/getallusers")
      .then(response=> setUserdata(response.data.data)
      ).catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
    fetchdata1();
    fetchdata2();
  }, [])
  const sale=productdata.filter(item => item.category == "sale");
  const n=productdata.filter(item => item.category == "new in");
  const r=productdata.filter(item=> item.subcategory== "relax");
  const shirtnew=productdata.filter(item=> item.subcategory2== "shirt" && item.category=="new in");
  const shirtsale=productdata.filter(item=> item.subcategory2== "shirt" && item.category=="sale");
  const teesnew=productdata.filter(item=> item.subcategory2== "tees" && item.category=="new in");
  const teessale=productdata.filter(item=> item.subcategory2== "tees" && item.category=="sale");
  const pantsnew=productdata.filter(item=> item.subcategory2== "pants" && item.category=="new in");
  const pantssale=productdata.filter(item=> item.subcategory2== "pants" && item.category=="sale");
  return (
   <>
      <BrowserRouter>
      <Header></Header>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/sale' element={<Sale data={sale}/>}></Route>
          <Route path='/new' element={<New data={n}/>}></Route>
          <Route path='/clothes' element={<Clothes data1={sale} data2={n}/>}></Route>
          <Route path='/relaxed-fit' element={<Relax data={r}/>}></Route>
          <Route path='/shirts' element={<Shirts data1={shirtnew} data2={shirtsale}/>}></Route>
          <Route path='/tees' element={<Shirts data1={teesnew} data2={teessale}/>}></Route>
          <Route path='/pants' element={<Denim data1={pantsnew} data2={pantssale}/>}></Route>
          <Route path={`/products/:id`} element={<Singleproduct/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/sign-up' element={<Signup/>}></Route>
          <Route path='/services' element={<TermsofServices/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
   </>
>>>>>>> Stashed changes
  )
}

export default App
