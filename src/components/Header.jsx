import React, { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <img className="logo"
      src="./src/assets/RS logo.png" alt="RS logo"
    />
  );
}
// SPA- Single Page Application 
// Client Server Routing 

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-list">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li> <Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {
        isLoggedin ? (
          <button onClick={() => setIsLoggedin(false)}>Logout</button>
        ): (
            <button onClick={() => setIsLoggedin(true)}>Login</button>
          )
      }

      {/* {
        isLoggedin ? 
        <button onClick={()=>{
          setIsLoggedin(false);
        }}
        >
          Logout
          </button> 
        : <button onClick={() => {
          setIsLoggedin(true);
        }}>
          Login
          </button>
      }  */}
    </div>
  );
}

export default Header;