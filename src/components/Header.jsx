import React, { useState } from "react";
import { ReactDOM } from "react";



const Title = () => {
  return(
    <img className="logo"
        src="./src/assets/RS logo.png" alt="RS logo"
      /> 
  );
}

const Header = () => {
  // const[inputValue , setInputValue] = useState("");
  return (
    <div className="header">
      <Title/>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Details</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* <input
      type="text"
      placeholder="Search"
      value={inputValue}
      onChange={(e)=>{
      setInputValue(e.target.value);
      }}
      /> */}

    </div>
  );
}

export default Header;