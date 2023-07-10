import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function Footer() {
  return (
    <div>
        <footer className='navbar sticky-bottom bg-dark text-light p-5 justify-content-between z-3 mt-5 backg'>
            <div className='container-fluid  res-footer align-items-center justify-content-center'>
                <div className='row '>
                    <div className='col-md-3 z-3'>
                        <h6 className="">About us</h6>
                        <ul className='list-unstyled text-light'>
                            <li><a className="text-light fw-light" href="/about">About</a></li>
                            <li><a className="text-light fw-light" href="/services">Terms of Services</a></li>
                            <li><a className="text-light fw-light" href="/about">Refund Policy</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h6>Contact</h6>
                        <ul className='list-unstyled text-light fw-light'>
                            <li><a className="text-light fw-light" href="/about"></a><LocalPhoneIcon/> 090078601</li>
                            <li><a className="text-light fw-light" href="/about"></a><MailOutlineIcon/> estore@gmail.com</li>
                            
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h6>Customer Service</h6>
                        <ul className='list-unstyled text-light'>
                            <li><a className="text-light fw-light" href="/about">FAQ's</a></li>
                            <li><a className="text-light fw-light" href="/about">Privacy policy</a></li>
                            <li><a className="text-light fw-light" href="/about">Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 z-1'>
                        <h6>Follow us</h6>
                        <ul className=' d-flex list-unstyled text-light'>
                            <li><a className="text-light fw-light" href="https://www.facebook.com/"><FacebookIcon/></a></li>
                            <li><a className="text-light fw-light" href="https://instagram.com"><InstagramIcon/></a></li>
                            <li><a className="text-light fw-light" href="https://pinterest.com"><PinterestIcon/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer