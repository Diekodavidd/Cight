import React from 'react'
import '../css/services.css'
import { motion } from "framer-motion";
import clea from '../assets/clea.jpeg'
import deli from '../assets/deli.jpeg'
import grap from '../assets/grap.jpeg'


const Services = () => {
  return (
    <>
    <div className='services'>
    <section className="container text-center cotai">
      <div className='glass'><h1>Reliable Cleaning, Fast Delivery, and Stunning Graphics—All in One Place!</h1></div>
      <div className="row mt-4">
        
        {/* Cleaning Service */}
        <motion.div 
          className="col-md-4 mb-4"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <div className="card shadow h-100 glowing-border">
            <div className="card-body">
              <img
                src={clea}
                alt="Cleaning"
                className="mb-3"
                style={{ width: "190px", borderRadius:"20px" }}
              />
              <h3 className="h5">Cleaning Services</h3>
              <p>Home & Office Cleaning, Deep Cleaning, Move-in/Move-out</p>
              <a href="#" className="btn btn-light mk">Book Cleaning</a>
            </div>
          </div>
        </motion.div>

        {/* Delivery Service */}
        <motion.div 
          className="col-md-4 mb-4"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <div className="card shadow h-100 glowing-border">
            <div className="card-body">
              <img
                src={deli}
                alt="Delivery"
                className="mb-3"
                style={{ width: "190px", borderRadius:"20px"}}
              />
              <h3 className="h5">Delivery Services</h3>
              <p>Fast & Secure, Same-Day Delivery, Parcel Handling</p>
              <a href="#" className="btn btn-light mk">Schedule Delivery</a>
            </div>
          </div>
        </motion.div>

        {/* Graphic Design Service */}
        <motion.div 
          className="col-md-4 mb-4"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <div className="card shadow h-100 glowing-border">
            <div className="card-body">
              <img
                src={grap}
                alt="Graphic Design"
                className="mb-3"
                style={{ width: "190px", borderRadius:"20px"}}
              />
              <h3 className="h5">Graphic Design</h3>
              <p>Logos, Flyers, Branding, Social Media Designs</p>
              <a href="#" className="btn btn-light mk">Get a Design</a>
            </div>
          </div>
        </motion.div>

      </div>
      <div className='glass'><p>We provide top-tier services to keep your space spotless, your packages delivered, and your brand looking sharp.</p>  </div>    
</section>
    </div>

    </>
  )
}

export default Services