import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Import Firebase auth
import '../css/navbar.css';
import logo from "../assets/yy.jpeg";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  useEffect(() => {
    // Retrieve user info from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse stored JSON string
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      localStorage.removeItem("user"); // Remove user data from localStorage
      setUser(null); // ✅ Clear user state
      alert("Logout successful!"); // Show success message
      navigate("/"); // ✅ Redirect to the entrance page
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className='navbar'>
      <div className="lml">
        <a className="logo">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div>
        <div className="d-flex justify-content-center align-items-center text-white">
          <h1 className="fw-bold text-uppercase text-center">
            <span className="text-light">C</span>
            <span className="text-danger" style={{ transform: "rotate(-12deg)", display: "inline-block" }}>I</span>
            <span className="text-light">GHT</span>
          </h1>
        </div>
      </div>
      <div>
        <button className="nav-btn">
          {user ? `Welcome, ${user.username}!` : "Book a service"}
        </button>
        {user && <button className="nav-btn" onClick={handleLogout}>Logout</button>} {/* ✅ Only show if user is logged in */}
      </div>
    </div>
  );
};

export default Navbar;
