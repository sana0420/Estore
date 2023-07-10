import { useState, useEffect } from "react"
import "./Cards.css"
import { Link } from "react-router-dom"; 
import axios from "axios";
function Cards(props) {
    const data = props.data;
    const url = `http://localhost:3000/products/:id`;
    axios(url)
        .then(res => console.log(res)) // this line return status:200 and data:null
        .catch(err => console.log(err.message))
    return (
            <div className="d-flex justify-content-evenly align-items-center flex-wrap ">
                {
                    data.map((item) => {
                        return (
                            <Link to={`/products`}>
                                <div className="card card-link" style={{ width: "22rem", borderRadius: "0px" }}>
                                <div className="">
                                <span class="badge bg-light text-dark fs-6 top-10 start-10 notify-badge">New</span>
                                <img src={item.image} className="card-img-top" style={{ height: "550px",borderRadius:"0px" }} alt="..." />
                                </div>
                                <button className="add-button mm">+ Add To Bag</button>
                                <div className="card-body mm">
                                    <h5 className="card-title marg">{item.name}</h5>
                                    <div className="d-flex">
                                    <p className="text-secondary mar ">Rs. {item.price}</p>
                                    </div>
                                </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
    )
}

export default Cards