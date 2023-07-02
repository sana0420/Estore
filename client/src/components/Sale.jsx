import React from 'react'
import "./Sale.css";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
function Sale() {
    return (
        <div className='mx-3 mt-3'>
            <p className='text-secondary'> <a href="/#">Home</a> / <span className='coll'>Sale</span></p>
            <div className='d-flex'>
                <div>Sort By</div>
                <div class="btn-group mx-2 border">
                    <button type="button border" class="btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">
                        Featured
                        <ExpandMoreOutlinedIcon />
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Featured</a></li>
                        <li><a class="dropdown-item" href="#">New arrival</a></li>
                        <li><a class="dropdown-item" href="#">Biggest Discount</a></li>
                        <li><a class="dropdown-item" href="#">Price: Low To High</a></li>
                        <li><a class="dropdown-item" href="#">Price: High To Low </a></li>
                    </ul>
                </div>
                <div class="btn-group border-filter">
                    <button type="button border-filter" class="btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">
                        <TuneOutlinedIcon /> FILTER
                    </button>
                    <ul class="dropdown-menu d-flex">
                        <div>
                            <li className='px-3'><p>CATEGORY</p></li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Ready to wear
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fabrics
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Western
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Accessories
                                </label>
                            </div>
                        </div>
                        <div>
                            <li className='px-3'><p>PRICE</p></li>
                            <input type="range" class="form-range " id="customRange1"/>
                        </div>
                        <div>
                        <li className='px-3'><p>SIZE</p></li>
                            <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        8
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    14
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    16
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    10
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    12
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    XS
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    S
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    L
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    M
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Free Size
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    6
                                </label>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sale