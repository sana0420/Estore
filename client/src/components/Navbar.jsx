<<<<<<< Updated upstream
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

=======
import React from 'react'
import './Navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className='d-flex justify-content-between  pt-2 shadow-sm sticky-top '>
            <Link to='/' className='pad'>
                <h1 className='text-dark fw-italic px-2 f-s'>ESTORE</h1>
                <img src="" alt="" />
            </Link>
            <div className='d-flex justify-content-evenly ' style={{ width: "30rem" }}>
                <Link to='/' className="nav-link f-sl px-1" >HOME</Link>
                <Link to='/new' className="nav-link f-sl px-1 " >NEW IN</Link>
                <Link to='/sale' className="nav-link  f-sl px-1" >SALE</Link>
                <div className=' dropdown px-1' aria-expanded="false">
                    <Link to='/clothes' className="nav-link f-sl " >CLOTHING</Link>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/shirts">Shirts/Dresses</a></li>
                        <li><a class="dropdown-item" href="/tees">Knit tops/Tees</a></li>
                        <li><a class="dropdown-item" href="/pants">Denims & Trousers</a></li>
                    </ul>
                </div>
                <div className=''>
                    <Link to='/relaxed-fit' className="nav-link px-1 f-sl" >RELAXED FIT
                        <span class="badge bg-light text-primary top-0 start-100 f">TREND</span>
                    </Link>
                </div>
            </div>
            <div className='d-flex fr'>
                <ul className='nav m'>
                    <li className='nav-item'>
                        <div className=' px-2  d-flex'>
                            <div className='nav-item px-2'>
                                <div className='flex-column dropdown'>
                                    <PersonOutlineOutlinedIcon className='text-dark' />
                                    <div className=' dropdown' aria-expanded="false">
                                        <ul class="dropdown-menu centered">
                                            <li><a class="dropdown-item" href="/login">Log in</a></li>
                                            <li><a class="dropdown-item" href="/sign-up">Sign up</a></li>
                                        </ul>
                                    </div>
                                    <p className='links-font'>Account
                                    </p>
                                    
                                </div>
                            </div>
                            <div className='nav-item px-2'>
                                <div className=' '>

                                    <Link to='/cart' className="position-relative" ><ShoppingBagOutlinedIcon className='text-dark '></ShoppingBagOutlinedIcon>

                                        <div className='links-font text-dark'>Bag</div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

>>>>>>> Stashed changes
export default Navbar