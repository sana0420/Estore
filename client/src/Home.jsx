import React from 'react'
import Lottie from 'lottie-react'
import animationData from './assets/66741-blue-blob.json'
import './Home.css'
function Home() {
  return (
    <section className='container-fluid bg-light '>
      <div className='row d-flex flex-row  justify-content-around align-items-center mt-3 resdesign '>
        <div className='col-sm-3'>
          <img className='responsive-image z-3' src="https://cdn.shopify.com/s/files/1/0202/5884/8822/files/Women_11.jpg?v=1685535251"alt="" />
          <Lottie className=" res res-img-blob" animationData={animationData}/>
        </div>
        <Lottie className="res z-0" animationData={animationData}/>
        <div className='col-sm-6 wid-text text-center '>
          <h1>Welcome to Estore</h1>
          <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sint quidem architecto quaerat at eaque, consequuntur error officiis nulla dolorem? Nemo, corrupti illum laborum non obcaecati consequuntur facere a voluptatem.</p>
        </div>
      </div>

    </section>
  )
}

export default Home