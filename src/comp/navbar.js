import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
      <div className="main">
        <NavLink className="nav" to="/gallery">Gallery</NavLink>
        <NavLink className="nav" to="/item">Item</NavLink>
        <NavLink className="nav" to="/about">About</NavLink>
        <NavLink className="nav" to="/location">Location</NavLink>



      </div>
    );
}

export default Navbar;
