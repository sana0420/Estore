import { useState, useEffect } from "react"
import "./Salecard.css"
import { Link } from "react-router-dom";

function Salecard(props) {
    const data = props.data;
    return (
        <>
            <div className="d-flex justify-content-evenly align-items-center flex-wrap ">
                {
                    data.map((item) => {
                        return (
                            <Link to={`/products/${item._id}`}  >
                                <div className="card card-link" style={{ width: "22rem",borderRadius:"0px" }}>
                                <div className="">
                                <span class="badge bg-danger text-dark fs-6 top-10 start-10 notify-badge">Sale</span>
                                <img src={item.image} className="card-img-top" style={{ height: "550px",borderRadius:"0px" }} alt="..." />
                                </div>
                                <button className="add-button mm" onClick={}>+ Add To Bag</button>
                                <div className="card-body mm">
                                    <h5 className="card-title marg">{item.name}</h5>
                                    <div className="d-flex">
                                    <p className="text-secondary mar text-decoration-line-through ">Rs. {item.price}</p>
                                    <p className="text-danger bold mar px-5 fw-bold">Rs. {Math.floor(item.price*0.5)}</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Salecard