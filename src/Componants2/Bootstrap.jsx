import React from 'react'
import './bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import image1 from "./images/image1.jpeg"
import image2 from "./images/image2.jpeg"
import image5 from "./images/image5.jpeg"
import image4 from "./images/image4.jpeg"
import image6 from "./images/image6.jpeg"
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";


export default function Bootstrap() {
  return (
   
   <div>
   {/* header */}
   <div class="header pt-3">
  <div class="header-content d-flex justify-content-between align-items-center w-100">
    {/* <!-- Logo Section --> */}
    <div class="logo ms-5 pt-2 fs-4">
      <b class="a">WELCOME</b>
    </div>
    {/* <!-- Navigation Section --> */}
    <div class="nav-section">
      <ul class="data d-flex justify-content-between align-items-center">
        <li class="b"><IoLogoTwitter/></li>
        <li class="c"><FaFacebookSquare/></li>
        <li class="d"><FaInstagram/></li>
        <li class="e"><FaGithub/></li>
        <li class="f"><IoDocumentTextOutline/><b>DOCUMENTATION</b></li>
        <li class="upgrade g"><MdOutlineRocketLaunch/><b>UPGRADE TO PRO</b></li>
      </ul>
    </div>
  </div>
</div>

  {/* header over */}
  
  {/* -----------slider--------- */}
  <div>
  <div id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className=" carousel-inner ">
    <div className="carousel-item active ">
      <img src={image2} class="slider" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image5}class="slider" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image4}class="slider" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
 </div>
 {/* silder over */}

{/* card */}

<div class="pt-3" >
<div className="d-flex justify-content-around ">

    <div className="card ">
      <img src={image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
  </div>
 
    <div className="card">
      <img src={image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>

    <div className="card">
      <img src={image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  
    <div className="card ">
      <img src={image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>

    <div className="card">
      <img src={image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  
    <div className="card">
      <img src={image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
</div>

</div>

{/* footer */}
<div class="pt-3">
<footer className="footer pt-5">
      
        <div class="d-flex justify-content-around">

          <div class="">
            <h5>About Us</h5>
            <p>We are a company dedicated to providing high-quality products.</p>
          </div>

          <div class="">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>

          <div class="">
            <h5>Follow Us</h5>
            <ul>
              <li class="c"><FaFacebookSquare/><a href="https://facebook.com"> Facebook</a></li>
              <li class="b"><IoLogoTwitter/><a href="https://twitter.com"> Twitter</a></li>
              <li class="d"><FaInstagram /><a href="https://instagram.com"> Instagram</a></li>
            </ul>
          </div>

        </div>

        <div className="text-center">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
    
    </footer>
</div>
 </div>
  )
}
