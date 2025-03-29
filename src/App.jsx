import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from './componets/Hero'
import Services from './componets/Services'
import Pricing from './componets/Pricing'
import Cta from './componets/Cta'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './componets/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero/>
      <Services />
      <Pricing />
      <Cta />
      <Footer />
    </>
  )
}

export default App
