import React from 'react';
import { IoMdSearch, IoIosNotifications, IoMdMenu } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import "./Youtube.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { FaYoutube } from "react-icons/fa";
import "./Youtubesidebar.jsx"


const Navbar = () => {
  return (
    <div className="navbar position-fixed">
      <div className="navbar-left">
        <IoMdMenu className="navbar-icon" />
        <span className="navbar-logo"><a class="icon"><FaYoutube /></a>YouTube</span>
      </div>
      <div className="navbar-center">
        <input type="text" className="navbar-search" placeholder="Search" />
        <IoMdSearch className="navbar-search-icon" />
      </div>
      <div className="navbar-right">
        <IoIosNotifications className="navbar-icon" />
        <FaUserCircle className="navbar-icon" />
      </div>
    </div>
  );
};

export default Navbar;

