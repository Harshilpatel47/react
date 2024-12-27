import React from 'react'
import './Navbar1.css'
import './bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaReact } from "react-icons/fa";


export default function Navbar1() {
  return (
    <div> 
    

<Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <div class="logo"><FaReact/></div>
        <Navbar.Brand >My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

    </div>
  )
}
