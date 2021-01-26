import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <nav className="navBar">
                <ul className="menuItem">
                    <li>
                        <Link to="/dashboard" className="underline">Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/about' className="underline">About</Link>
                    </li>
                    <li>
                        <Link to='/partnerwithus' className="underline">Partner With Us</Link>
                    </li>
                    <li>
                        <Link to='/workwithus' className="underline">Work With Us</Link>
                    </li>
                    <li>
                        <Link to='/subscribe' className="underline">Subscribe</Link>
                    </li>
                </ul>     
            </nav>
            <button className="loginBtn">Login</button>                      
        </div>
    )
}

export default Header;
