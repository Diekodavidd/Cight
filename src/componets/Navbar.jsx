import React from 'react'
import '../css/navbar.css'
import logo from '../assets/yy.jpeg'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div>
                    <img className='nav-img' src={logo} alt="" width={90} height={90} />
                </div>
                <div>
                    <div className="d-flex justify-content-center align-items-center text-white">
                        <h1 className=" fw-bold text-uppercase text-center">
                            <span className="text-light">C</span>
                            <span className="text-danger" style={{ transform: "rotate(-12deg)", display: "inline-block" }}>I</span>
                            <span className="text-light">GHT</span>
                        </h1>
                    </div>
                </div>
                <div>
                    <button className='nav-btn'>Book a service</button>
                </div>
            </div>
        </>
    )
}

export default Navbar