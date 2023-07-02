import React from 'react'
import './Navbar.css'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
function Navbar() {
    return (
        <nav className='d-flex justify-content-between pt-2 shadow-sm sticky-top'>
            <div className='pad'>
                <img src="https://pk.khaadi.com/media/logo/stores/24/logo-khaadi.png" alt="" />
            </div>
            <div className='center'>
                <ul class="nav center">
                    <li class="nav-item dropdown center text-dark">
                        <a class="nav-link fs-6 fw-bold text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Sale</a>
                        <ul class="dropdown-menu justify-content-center ">
                            <div className='d-flex'>
                                <li>
                                    <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                                    <a class="dropdown-item text-center" href="#">Flat 70%</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                                    <a class="dropdown-item text-center" href="#">Flat 70%</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                                    <a class="dropdown-item text-center" href="#">Flat 70%</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                                    <a class="dropdown-item text-center" href="#">Flat 70%</a>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link fs-6 fw-bold text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Eid Collection <sup className='text-danger fw-medium'>NEW</sup></a>
                        <ul class="dropdown-menu justify-content-center">
                        <div className='d-flex'>
                                <li>
                                    <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                                    <a class="dropdown-item text-center" href="#">Fabrics</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                                    <a class="dropdown-item text-center" href="#">Ready To Wear</a>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link fs-6 text-dark fw-normal" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">New In</a>
                        <ul class="dropdown-menu justify-content-center">
                        <div className='d-flex'>
                                <li>
                                    <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                                    <a class="dropdown-item text-center" href="#">Fabrics</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                                    <a class="dropdown-item text-center" href="#">Ready To Wear</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                                    <a class="dropdown-item text-center" href="#">Western</a>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link fs-6 text-dark fw-normal" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Fabrics</a>
                        <ul class="dropdown-menu centered">
                            <div className='d-flex m-2 '>
                                <li className='nav-item'>
                                    <div className='wid'>
                                        <p className=''>By Collection</p>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">The Print Story</a><sup className='text-danger'>NEW</sup></div>
                                        <div className='nav-item p-1'> <a className="text-dark fw-light" href="">Rangeen</a><sup className='text-danger'>NEW</sup></div>
                                        <div className='nav-item p-1'> <a className="text-dark fw-light" href="">Lawn Collection</a></div>
                                        <div className='nav-item p-1'> <a className="text-dark fw-light" href="">Winter Collection</a></div>
                                        <div className='nav-item p-1'> <a className="text-dark fw-light" href="">Spring Collection</a></div>
                                        <div className='nav-item p-1 text-secondary col'> <a className="text-dark col" href="">VIEW MORE</a></div>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className='wid'>
                                    <a class="dropdown-item " href="#">3 Piece Fabrics</a>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Khaas Full Suit</a></div>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Printed Full Suit</a></div>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Embroidered Full Suit</a></div>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className='wid'>
                                    <a class="dropdown-item" href="#">2 Piece Fabrics</a>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Embroidered Top Dubatta</a></div>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Embroidered Top Bottoms</a></div>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Printed Top Dubatta</a></div>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Printed Top Bottoms</a></div>
                                    </div>
                                </li>
                                <div>
                                <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                            </div>
                            </div>
                          
                        </ul>
                    </li>
                    <li class="nav-item dropdown justify-content-center ">
                        <a class="nav-link fs-6 text-dark fw-normal" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Ready To Wear</a>
                        <ul class="dropdown-menu justify-content-center centered">
                            <div className='d-flex m-2 justify-content-center'>
                                <li className='nav-item'>
                                    <div className='wid'>
                                        <p className=''>By Collection</p>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">The Print Story</a><sup className='text-danger'>NEW</sup></div>
                                        <div className='nav-item p-1'> <a className="text-dark fw-light" href="">Rangeen</a><sup className='text-danger'>NEW</sup></div>
                                        <div className='nav-item p-1'> <a className="text-dark fw-light" href="">Lawn Collection</a></div>
                                        <div className='nav-item p-1'> <a className="text-dark fw-light" href="">Winter Collection</a></div>
                                        <div className='nav-item p-1'> <a className="text-dark fw-light" href="">Spring Collection</a></div>
                                        <div className='nav-item p-1 text-secondary col'> <a className="text-dark col" href="">VIEW MORE</a></div>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className='wid'>
                                    <a class="dropdown-item" href="#">3 Piece Fabrics</a>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Khaas Full Suit</a></div>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Printed Full Suit</a></div>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Embroidered Full Suit</a></div>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className='wid'>
                                    <a class="dropdown-item" href="#">2 Piece Fabrics</a>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Embroidered Top Dubatta</a></div>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Embroidered Top Bottoms</a></div>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Printed Top Dubatta</a></div>
                                        <div className='nav-item p-1'><a className="text-dark fw-light" href="">Printed Top Bottoms</a></div>
                                    </div>
                                </li>
                                <div>
                                <a class="dropdown-item" href='#'><img className='img-sale' src="https://cdn-icons-png.flaticon.com/512/5305/5305244.png" alt="" /></a>
                            </div>
                            </div>
                          
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <ul class='nav'>
                    <li class='nav-item px-2'>
                        <div className='flex-column'>
                            <a href=""><LocalShippingOutlinedIcon className='text-dark' /></a>
                            <p className='links-font'>Track</p>
                        </div>
                    </li>
                    <li class='nav-item'>
                        <div className='flex-column px-2'>
                            <a href=""><SearchOutlinedIcon className='text-dark' /></a>
                            <p className='links-font'>Search</p>
                        </div>
                    </li>
                    <li class='nav-item px-2'>
                        <div className='flex-column'>
                            <a href=""><PersonOutlineOutlinedIcon className='text-dark' /></a>
                            <p className='links-font'>Account</p>
                        </div>
                    </li>
                    <li class='nav-item px-2'>
                        <div className='flex-column'>
                            <a href=""><ShoppingBagOutlinedIcon className='text-dark' /></a>
                            <p className='links-font'>Bag</p>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar