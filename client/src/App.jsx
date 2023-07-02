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
  )
}

export default App
