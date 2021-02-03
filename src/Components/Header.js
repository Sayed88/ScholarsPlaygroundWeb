import React, { useState } from 'react';
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, } from 'react-router-dom';
import { Button, Modal, Form, Nav, Navbar } from 'react-bootstrap';
import ViewListIcon from '@material-ui/icons/ViewList';
import InfoIcon from '@material-ui/icons/Info';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

            <Navbar variant="light" expand="lg">
                <Navbar.Brand>
                    <Link to="/dashboard" className='logo'><h3>ScholarsPlayground</h3></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="nav-toggle" />
                <Navbar.Collapse id="nav-toggle">

                    <Nav className=" mr-auto navb">
                        <Nav.Link>
                            <Link to='/dashboard' className="menuItem">
                                <div className="NavItems">
                                    <ViewListIcon className="navIcn"/>Dashboard
                                </div>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/about' className="menuItem">
                                <div className="NavItems">
                                    <InfoIcon className="navIcn"/>
                                    About
                                </div>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/partnerwithus' className="menuItem">
                                <div className="NavItems">
                                    <ThumbsUpDownIcon className="navIcn"/>
                                    Partner With Us
                                </div>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/workwithus' className="menuItem">
                                <div className="navItems">
                                    <GroupWorkIcon className="navIcn"/>
                                    Work With Us
                                </div>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/subscribe' className="menuItem">
                            <div className="navItems">
                                <SubscriptionsIcon className="navIcn"/>
                                Subscribe
                            </div>
                                </Link>
                        </Nav.Link>
                    </Nav>
                    <div className="sigbtn">
                        <Button variant="outline-warning">
                            <Link to="/signup" className='logo'>
                                <div className="navItems">
                                    <PersonAddIcon className="navIcn" />
                                    SignUp
                                </div>
                            </Link>
                        </Button>

                        <Button variant="outline-info mx-2" onClick={handleShow}>
                            <div className="navItems">
                                <ExitToAppIcon className="navIcn"/>
                                Login
                            </div>
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>


            {/* <nav className="navBar">
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
            </nav> */}

            {/* <div className="loginpage">
                <Link to="/login" className="logbtn">
                    <h1>Login</h1>
                </Link>
            </div> */}

            <div className="modalBtn">
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

                                <Link to="loggedinview">
                                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                                            Login
                                    </Button>                        
                                </Link>
                            
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
