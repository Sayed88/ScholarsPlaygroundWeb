import React, { useState } from 'react';
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, } from 'react-router-dom';
import { Button, Modal, Form, Nav, Navbar } from 'react-bootstrap';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Image from './Scholars PNG.png';



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
      <Navbar variant="light" bg="light" fixed="top" position="relative" expand="lg">
        <Navbar.Brand>
          <Link to="/" className='logo'><img className="LgImg" src={Image} alt="ScholarsPlayground Logo" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-toggle" />
        <Navbar.Collapse id="nav-toggle">

          <Nav className=" mr-auto navb">
            <Nav.Link>
              <Link to='/dashboard' className="menuItem">
                <div className="navItems">
                  <DashboardIcon className="navIcn" />
                  Dashboard
                </div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/plans' className="menuItem">
                <div className="navItems">
                  <DynamicFeedIcon className="navIcn" />
                  Plans
                </div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/partner_withus' className="menuItem">
                <div className="navItems">
                  <ThumbsUpDownIcon className="navIcn" />
                  Partner With Us
                </div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/work_withus' className="menuItem">
                <div className="navItems">
                  <GroupWorkIcon className="navIcn" />
                  Work With Us
                </div>
              </Link>
            </Nav.Link>
          </Nav>
          <div className="sigbtn">
            <Button variant="outline-warning">
              <Link to="/signup" className='logo'>
                <div className="">
                  <PersonAddIcon className="navIcn" />
                  SignUp
                </div>
              </Link>
            </Button>

            <Button variant="outline-primary mx-2" onClick={handleShow}>
              <div className="">
                <ExitToAppIcon className="navIcn" />
                Login
              </div>
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>


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

              <Link to="loggedin_view">
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                  Login
                </Button>
              </Link>

              <p>
                <Link to="/reset_password">
                  Forgot Password? / Reset Password
                </Link>
                <br />
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
