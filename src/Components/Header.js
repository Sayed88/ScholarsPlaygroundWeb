import React from 'react';
import './Header.css';
import { Link, } from 'react-router-dom';

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

            <div className="loginpage">
                <Link to="/login" className="logbtn">
                    <h1>Login</h1>
                </Link>
            </div>

        </div>
    )
}

export default Header;
