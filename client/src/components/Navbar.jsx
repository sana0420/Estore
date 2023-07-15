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

export default Navbar