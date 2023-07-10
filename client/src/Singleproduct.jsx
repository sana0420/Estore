import React from 'react'
import axios from 'axios';
function Singleproduct() {
    const url = "http://localhost:3000/products/:id";
    axios(url)
        .then(res => console.log(res)) // this line return status:200 and data:null
        .catch(err => console.log(err.message))
  return (
    <div>
        <div>
            <img src="" alt="" />
    
        </div>
    </div>
  )
}

export default Singleproduct