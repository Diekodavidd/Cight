import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/services.css'

const Footer = () => {
  return (
    <>
    <footer className="glass hhh text-white py-4 text-center">
      <div className="container">
        <h2 className="fw-bold">CIGHT</h2>
        <p className="fst-italic">"Empowering Innovation, Elevating Excellence"</p>
        
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="#" className="text-primary" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-danger" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-info" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-primary" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-danger" aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
        </div>

        <nav className="mt-4">
          <a href="#" className="text-light mx-2 text-decoration-none">Home</a>
          <a href="#" className="text-light mx-2 text-decoration-none">About Us</a>
          <a href="#" className="text-light mx-2 text-decoration-none">Services</a>
          <a href="#" className="text-light mx-2 text-decoration-none">Contact</a>
          <a href="#" className="text-light mx-2 text-decoration-none">Blog</a>
        </nav>

        <div className="mt-3 text-secondary">
          <p>© 2025 Cight | All Rights Reserved</p>
          <div>
            <a href="#" className="text-light mx-2 text-decoration-none">Terms & Conditions</a>
            <a href="#" className="text-light mx-2 text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-light mx-2 text-decoration-none">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer