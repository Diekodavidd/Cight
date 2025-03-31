import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Hero from './componets/Hero';
import Services from './componets/Services';
import Pricing from './componets/Pricing';
import Cta from './componets/Cta';
import Footer from './componets/Footer';
import Entrance from './componets/Entrance';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import './css/navbar.css'

function App() {
  return (
  <>
      
      <Routes>
        {/* Home route displaying all sections */}
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Hero />
              <Services />
              <Pricing />
              <Cta />
              <Footer />
            </>
          } 
        />
        {/* Separate route for Entrance */}
        <Route path="/Entrance" element={<Entrance />} />
      </Routes>
      </>
  );
}

export default App;
