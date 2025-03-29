import React from 'react'
import '../css/hero.css'
import hero from '../assets/hero3.webp'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
    <div className='hero-div glass-black'>
        <div style={{width:"100%"}}>
            <header className="text-center py-10">
                    <motion.h1
                      className="text-4xl font-bold text-blue-600"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }} // Sl
                    >
                      Welcome to CIGHT
                    </motion.h1>
            </header>
            <img className='stay' src={hero} alt="" />
            <p className="text-gray-700 mt-2">
                 One-stop solution for Cleaning, Delivery & Graphics Designing Services
            </p>
             <button className='hero-btn'>Get Started</button>
        </div>
    </div>
    </>
  )
}

export default Hero