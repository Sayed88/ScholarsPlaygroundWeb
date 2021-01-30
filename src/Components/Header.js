import React, { useState } from 'react';
import './Header.css';
import { Link, } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';

function Header() {

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }


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

            {/* <div className="loginpage">
                <Link to="/login" className="logbtn">
                    <h1>Login</h1>
                </Link>
            </div> */}

            <div className="modalBtn">
                <Button variant="info" onClick={handleShow}>
                    Login
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Welcome Back Scholar Please Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group size="lg" controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group size="lg" controlId="password">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button block size="lg" type="submit" disabled={!validateForm()}>
                                Login
                            </Button>                        
                            
                            <p>
                                <Link to="/forgotpassword">
                                    Forgot Password?
                                </Link>
                                <br/>
                                New to the Playground? <Link to="/signup">SignUp Here</Link>
                            </p>
                        </Form>                        
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}


export default Header;
