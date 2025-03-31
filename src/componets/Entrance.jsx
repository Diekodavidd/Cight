import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/entrance.css';
import { Link } from 'react-router-dom';
import { auth, db  } from "../firebaseConfig"; // Import Firebase auth
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; // Firestore functions
import logo from '../assets/yy.jpeg'

const Entrance = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Show popup on load
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");// New username state
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 🔥 Add loading state

  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  // const [userData, setUserData] = useState(null); // Store user data after login
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          localStorage.setItem("username", userDoc.data().username);
          navigate("/");
        }
      }
    });
    return () => unsubscribe();
  }, [navigate]);

     
  const navbarMenuRef = useRef(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  // const togglePopup = () => setShowPopup((prev) => !prev);
  // const switchForm = (type) => setIsSignup(type === 'signup');

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
    setError(""); // Clear errors when opening/closing popup
  };
  const switchForm = (type) => {
    setIsSignup(type === "signup");
    setError(""); // Reset error when switching forms
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarMenuRef.current && !navbarMenuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("show-popup");
    } else {
      document.body.classList.remove("show-popup");
    }
  }, [showPopup]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   // Save user info to localStorage
   const saveUserToLocal = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

   // Handle Signup/Login
   const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { username, email, password } = formData;
    if (!username.trim()) {
      setError("Username is required");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = { username, email, uid: user.uid };

      await setDoc(doc(db, "users", user.uid), userData);

       // Save to localStorage
       saveUserToLocal(userData);
       setUserName(userData.username); // ✅ Update the state with the username
       console.log(userData);
       
      console.log(formData);
      alert("Signup successful!"); // Show success message
      setShowPopup(false); // Close the popup
      setFormData({ username: "", email: "", password: "" }); // Clear inputs
      navigate('/'); // Redirect to home page
   
      
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { email, password } = formData; // ✅ Extract from formData

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Fetch user details from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        saveUserToLocal(userData);
        setUserName(userData.username); // ✅ Update the state with the username
      }

      alert("Login successful!"); // Show success message
      setShowPopup(false); // Close the popup
      setFormData({ username: "", email: "", password: "" }); // Clear inputs

      navigate('/'); // Redirect to home page
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
};


  return (
    <div className='fadr'>
      <header>
        <nav className="gad">
          <span className="hamburger-btn material-symbols-rounded" onClick={toggleMenu}>menu</span>
          <a  className="logo">
            <img src={logo} alt="logo"/>
            {/* <h2>Cight</h2> */}
          </a>
          <ul className={`links ${showMenu ? 'show-menu' : ''}`} ref={navbarMenuRef}>
            <span className="close-btn material-symbols-rounded" onClick={toggleMenu}>close</span>
            <button className="login-btn"><Link style={{color:"black", textDecoration:"none", fontSize:"15px"}} to="/">Home</Link> </button>
          </ul>
        </nav>
      </header>
      {showPopup && <div className="blur-bg-overlay" onClick={togglePopup}></div>}
      {showPopup && (
        <div className={`form-popup ${isSignup ? 'show-signup' : ''}`}>
          <span className="close-btn material-symbols-rounded" onClick={togglePopup}>close</span>
          {isSignup ? (
            <div className="form-box signup">
              <div className="form-details">
                <h2>Create Account</h2>
                <p>Join our community by signing up.</p>
              </div>
              <div className="form-content">
                <h2>SIGNUP</h2>
                <form onSubmit={handleSignup}>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                   <div className="input-field">
                   <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                   <label>Email</label>
                  </div>
                  <div className="input-field">
                  <input type="text" name="username" value={formData.username} onChange={handleChange} required/>
                  <label>Username</label>
                  </div>
                  <div className="input-field">
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
                  <label>Password</label>
                  </div>
                  <div className="policy-text">
                    <input type="checkbox" id="policy"/>
                    <label htmlFor="policy">I agree to the <a href="#">Terms & Conditions</a></label>
                  </div>
                  <button type="submit" disabled={loading}>{loading ? "Signing up......" : "Sign Up"}</button>
                </form>
                <div className="bottom-link">Already have an account? <a href="#" onClick={() => switchForm('login')}>Login</a></div>
              </div>
            </div>
          ) : (
            <div className="form-box login">
              <div className="form-details">
                <h2>Welcome Back</h2>
                <p>Log in to continue.</p>
              </div>
              <div className="form-content">
                <h2>LOGIN</h2>
                 <form onSubmit={handleLogin}>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <div className="input-field">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                  <label>Email</label>
                  </div>
                  <div className="input-field">
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
                  <label>Password</label>
                  </div>
                  <a href="#" className="forgot-pass-link">Forgot password?</a>
                  <button type="submit" disabled={loading}> {loading ? "Logging in..." : "Log In"}</button>
                </form>
                <div className="bottom-link">Don't have an account? <a href="#" onClick={() => switchForm('signup')}>Signup</a></div>
              </div>
            </div>
          )}
        </div>
      )}
      <div className='mid'>
      <div>
      <div className='story'>
                    <div className="d-flex justify-content-center align-items-center text-white">
                        <h2 className=" fw-bold text-uppercase text-center hjd">
                            <span className="text-light">C</span>
                            <span className="text-danger" style={{ transform: "rotate(-12deg)", display: "inline-block" }}>I</span>
                            <span className="text-light">GHT</span>
                        </h2>
                    </div>
     </div>
     <div className='faw'>
     <button className="login-btn mmm" style={{color:"black", textDecoration:"none", fontSize:"15px", fontWeight:"500"}} onClick={togglePopup}>SIGN UP</button>
     </div>
      </div>
      </div>
    </div>
  );
};
export default Entrance;