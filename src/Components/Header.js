import React from 'react';
import './Header.css';
import { Link, } from 'react-router-dom';
import { Nav,Navbar } from 'react-bootstrap';

function Header() {
    return (
        <div className="header">
          <Navbar className='navbar'expand='lg'>
          <Navbar.Brand className="menuItem" href="/">Scholars' Playground Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className=''>
        <Nav.Link className="menuItem">
        <Link to="/dashboard" className="underline">Dashboard</Link>
          </Nav.Link>
          <Nav.Link className="menuItem">
          <Link to='/about' className="underline">About</Link>
          </Nav.Link>
          <Nav.Link className="menuItem">
          <Link to='/partnerwithus' className="underline">Partner With Us</Link>
          </Nav.Link>
          <Nav.Link className="menuItem">
          <Link to='/workwithus' className="underline">Work With Us</Link>
          </Nav.Link>
          <Nav.Link className="menuItem">
          <Link to='/subscribe' className="underline">Subscribe</Link>
          </Nav.Link>
          <Nav.Link className="mr-auto">
                <Link to="/login" className="loginpage">
                    <h3>Login</h3>
                </Link>
          </Nav.Link>      
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </div>
    )
}

export default Header;
